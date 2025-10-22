// Python Web Worker - Runs Pyodide in a separate thread
import pyoPackageJson from "pyodide/package.json";
import {loadPyodide, PyodideInterface} from "pyodide";

let pyodide: PyodideInterface | null = null;
let workspaceMountFS: any = null;
let interruptBuffer: Uint8Array | null = null;
let inputCounter = 0;
const pendingInputRequests: Map<string, { resolve: (value: string) => void, reject: (error: any) => void }> = new Map();

// Store original console methods before interception
const originalConsole = {
    log: console.log.bind(console),
    info: console.info.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
    debug: console.debug.bind(console)
};

// Helper to format console arguments
function formatArg(arg: any): string {
    if (arg === null) return 'null';
    if (arg === undefined) return 'undefined';
    if (typeof arg === 'string') return arg;
    if (typeof arg === 'number' || typeof arg === 'boolean') return String(arg);
    if (arg instanceof Error) return `${arg.name}: ${arg.message}`;
    
    try {
        return JSON.stringify(arg);
    } catch {
        return String(arg);
    }
}

// Intercept worker console and forward to main thread
console.log = function(...args: any[]) {
    originalConsole.log.apply(console, args);
    self.postMessage({
        id: 'console-log',
        type: 'console',
        payload: { level: 'info', message: args.map(a => formatArg(a)).join(' ') }
    });
};

console.info = function(...args: any[]) {
    originalConsole.info.apply(console, args);
    self.postMessage({
        id: 'console-log',
        type: 'console',
        payload: { level: 'info', message: args.map(a => formatArg(a)).join(' ') }
    });
};

console.warn = function(...args: any[]) {
    originalConsole.warn.apply(console, args);
    self.postMessage({
        id: 'console-log',
        type: 'console',
        payload: { level: 'warning', message: args.map(a => formatArg(a)).join(' ') }
    });
};

console.error = function(...args: any[]) {
    originalConsole.error.apply(console, args);
    self.postMessage({
        id: 'console-log',
        type: 'console',
        payload: { level: 'error', message: args.map(a => formatArg(a)).join(' ') }
    });
};

console.debug = function(...args: any[]) {
    originalConsole.debug.apply(console, args);
    self.postMessage({
        id: 'console-log',
        type: 'console',
        payload: { level: 'debug', message: args.map(a => formatArg(a)).join(' ') }
    });
};

// Message types for worker communication
export interface PyWorkerMessage {
    id: string;
    type: 'init' | 'execCode' | 'execModule' | 'runFunction' | 'setGlobal' | 'loadPackages' | 'syncWorkspace' | 'getVersion' | 'mountWorkspace' | 'installDependencies' | 'inputResponse';
    payload?: any;
}

export interface PyWorkerResponse {
    id: string;
    type: 'success' | 'error' | 'stdout' | 'stderr' | 'inputRequest' | 'console';
    payload?: any;
}

// Console output capture
const consoleBuffer: string[] = [];

function sendMessage(response: PyWorkerResponse) {
    self.postMessage(response);
}

// Initialize Pyodide
async function initPyodide(payload: { vars?: any }) {
    const poVersion = pyoPackageJson.version;
    pyodide = await loadPyodide({
        indexURL: `https://cdn.jsdelivr.net/pyodide/v${poVersion}/full/`
    });
    
    // Set up interrupt buffer for cancellation support (if available)
    // SharedArrayBuffer requires cross-origin isolation headers:
    // - Cross-Origin-Opener-Policy: same-origin
    // - Cross-Origin-Embedder-Policy: require-corp
    if (typeof SharedArrayBuffer !== 'undefined') {
        try {
            const interruptBufferShared = new SharedArrayBuffer(1);
            interruptBuffer = new Uint8Array(interruptBufferShared);
            pyodide.setInterruptBuffer(interruptBuffer);
            
            // Send the interrupt buffer to main thread
            sendMessage({
                id: 'interrupt-buffer',
                type: 'success',
                payload: interruptBufferShared
            });
        } catch (error) {
            console.warn('Failed to set up interrupt buffer:', error);
            // Send notification that interrupt buffer is not available
            sendMessage({
                id: 'interrupt-buffer',
                type: 'error',
                payload: { message: 'SharedArrayBuffer not available' }
            });
        }
    } else {
        console.warn('SharedArrayBuffer not available - interrupt functionality will be limited');
        // Send notification that interrupt buffer is not available
        sendMessage({
            id: 'interrupt-buffer',
            type: 'error',
            payload: { message: 'SharedArrayBuffer not available' }
        });
    }
    
    // Set up input() function to request input from main thread
    pyodide.globals.set('input', (promptText?: string) => {
        const inputId = `input-${inputCounter++}`;
        
        // Send input request to main thread
        sendMessage({
            id: inputId,
            type: 'inputRequest',
            payload: { prompt: promptText || '' }
        });
        
        // Return a promise that will be resolved when main thread responds
        return new Promise<string>((resolve, reject) => {
            pendingInputRequests.set(inputId, { resolve, reject });
        });
    });
    
    // Set up stdout/stderr capture
    pyodide.setStderr({
        batched: (s: string) => {
            // Store without prefix for cleaner output
            consoleBuffer.push(s);
            sendMessage({
                id: 'stream',
                type: 'stderr',
                payload: s
            });
        }
    });
    
    pyodide.setStdout({
        batched: (s: string) => {
            // Store without prefix for cleaner output
            consoleBuffer.push(s);
            sendMessage({
                id: 'stream',
                type: 'stdout',
                payload: s
            });
        }
    });
    
    // Set custom variables if provided
    if (payload.vars) {
        for (const [key, value] of Object.entries(payload.vars)) {
            pyodide.globals.set(key, value);
        }
    }
}

// Mount workspace using FileSystemDirectoryHandle
async function mountWorkspace(payload: { handle: FileSystemDirectoryHandle; mountPoint?: string }) {
    if (!pyodide) throw new Error('Pyodide not initialized');
    
    const mountPoint = payload.mountPoint || '/workspace';
    workspaceMountFS = await pyodide.mountNativeFS(mountPoint, payload.handle);
    pyodide.runPython(`import os, sys; sys.path.append('${mountPoint}'); os.chdir("${mountPoint}");`);
}

// Install dependencies from requirements.txt
async function installDependencies(payload: { requirements: string }) {
    if (!pyodide) throw new Error('Pyodide not initialized');
    
    const lines = payload.requirements.split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'));
    
    if (lines.length > 0) {
        await pyodide.loadPackage(lines, {
            checkIntegrity: false
        });
    }
}

// Load Python packages
async function loadPackages(payload: { packages: string[] }) {
    if (!pyodide) throw new Error('Pyodide not initialized');
    
    if (payload.packages.length > 0) {
        await pyodide.loadPackage(payload.packages, {
            checkIntegrity: false
        });
    }
}

// Convert Python result to JavaScript-cloneable value
function convertResult(result: any): any {
    if (result === undefined || result === null) {
        return result;
    }
    
    // Handle primitives (string, number, boolean)
    const resultType = typeof result;
    if (resultType === 'string' || resultType === 'number' || resultType === 'boolean') {
        return result;
    }
    
    // Check if it's a PyProxy (Python object) by checking for common PyProxy methods
    if (result && typeof result === 'object') {
        // PyProxy objects have toJs() method
        if (typeof result.toJs === 'function') {
            try {
                // Convert to JavaScript object
                const jsValue = result.toJs({ 
                    dict_converter: Object.fromEntries,
                    create_pyproxies: false 
                });
                
                // Clean up PyProxy
                if (typeof result.destroy === 'function') {
                    result.destroy();
                }
                
                return jsValue;
            } catch (error) {
                // If conversion fails, stringify it
                try {
                    const strValue = String(result);
                    if (typeof result.destroy === 'function') {
                        result.destroy();
                    }
                    return strValue;
                } catch {
                    return '[Python object]';
                }
            }
        }
        
        // Try to clone regular JS objects
        try {
            // This will throw if object is not cloneable
            structuredClone(result);
            return result;
        } catch {
            // If not cloneable, try to stringify
            try {
                return JSON.parse(JSON.stringify(result));
            } catch {
                return String(result);
            }
        }
    }
    
    // Fallback for any other type
    return result;
}

// Execute Python code
async function execCode(payload: { code: string }) {
    if (!pyodide) throw new Error('Pyodide not initialized');
    
    consoleBuffer.length = 0; // Clear buffer
    
    // Reset interrupt buffer before execution
    if (interruptBuffer) {
        interruptBuffer[0] = 0;
    }
    
    let result;
    try {
        result = await pyodide.runPythonAsync(payload.code);
    } catch (error) {
        // Reset interrupt buffer after error (including KeyboardInterrupt)
        if (interruptBuffer) {
            interruptBuffer[0] = 0;
        }
        // Error will be caught by outer try-catch, but make sure console is captured
        throw error;
    }
    
    // Reset interrupt buffer after successful execution
    if (interruptBuffer) {
        interruptBuffer[0] = 0;
    }
    
    await syncWorkspace();
    
    return {
        result: convertResult(result),
        console: consoleBuffer.slice()
    };
}

// Execute Python module
async function execModule(payload: { moduleName: string; entryName?: string; vars?: any }) {
    if (!pyodide) throw new Error('Pyodide not initialized');
    
    consoleBuffer.length = 0;
    const mod = pyodide.pyimport(payload.moduleName);
    const entryName = payload.entryName ?? 'main';
    
    let result;
    if (entryName in mod) {
        const func = mod[entryName];
        if (!(func instanceof Function)) {
            throw new Error(`Module entry point is not a function: ${entryName}`);
        }
        result = func.callKwargs(payload.vars || {});
    }
    
    await syncWorkspace();
    
    return {
        result: convertResult(result),
        console: consoleBuffer.slice()
    };
}

// Run a Python function
async function runFunction(payload: { name: string; args: any }) {
    if (!pyodide) throw new Error('Pyodide not initialized');
    
    consoleBuffer.length = 0;
    const func = pyodide.globals.get(payload.name);
    const result = func.callKwargs(payload.args);
    func.destroy();
    await syncWorkspace();
    
    return {
        result: convertResult(result),
        console: consoleBuffer.slice()
    };
}

// Set a global variable
async function setGlobal(payload: { key: string; value: any }) {
    if (!pyodide) throw new Error('Pyodide not initialized');
    pyodide.globals.set(payload.key, payload.value);
}

// Sync workspace filesystem
async function syncWorkspace() {
    if (workspaceMountFS) {
        await workspaceMountFS.syncfs();
    }
}

// Get Pyodide version
async function getVersion() {
    if (!pyodide) throw new Error('Pyodide not initialized');
    // Version is already a string, but ensure it's cloneable
    return String(pyodide.version);
}

// Message handler
self.onmessage = async (event: MessageEvent<PyWorkerMessage>) => {
    const { id, type, payload } = event.data;
    
    // Handle input response separately (doesn't follow normal request/response pattern)
    if (type === 'inputResponse') {
        const pending = pendingInputRequests.get(id);
        if (pending) {
            pendingInputRequests.delete(id);
            if (payload.cancelled) {
                pending.resolve('');  // Return empty string if cancelled
            } else {
                pending.resolve(payload.value || '');
            }
        }
        return;
    }
    
    try {
        let result;
        
        switch (type) {
            case 'init':
                await initPyodide(payload);
                result = { initialized: true };
                break;
            case 'mountWorkspace':
                await mountWorkspace(payload);
                result = { mounted: true };
                break;
            case 'installDependencies':
                await installDependencies(payload);
                result = { installed: true };
                break;
            case 'loadPackages':
                await loadPackages(payload);
                result = { loaded: true };
                break;
            case 'execCode':
                result = await execCode(payload);
                break;
            case 'execModule':
                result = await execModule(payload);
                break;
            case 'runFunction':
                result = await runFunction(payload);
                break;
            case 'setGlobal':
                await setGlobal(payload);
                result = { set: true };
                break;
            case 'syncWorkspace':
                await syncWorkspace();
                result = { synced: true };
                break;
            case 'getVersion':
                result = await getVersion();
                break;
            default:
                throw new Error(`Unknown message type: ${type}`);
        }
        
        sendMessage({
            id,
            type: 'success',
            payload: result
        });
    } catch (error) {
        sendMessage({
            id,
            type: 'error',
            payload: {
                message: error instanceof Error ? error.message : String(error),
                stack: error instanceof Error ? error.stack : undefined
            }
        });
    }
};

