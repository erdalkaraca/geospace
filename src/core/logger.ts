import { LogLevel } from '../components/k-log-terminal.ts';

// Store original console methods before any interception
const originalConsole = {
    log: console.log.bind(console),
    info: console.info.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
    debug: console.debug.bind(console)
};

// Message buffer for logs that occur before terminal is ready
const messageBuffer: Array<{source: string, message: string, level: LogLevel}> = [];

// Format console arguments
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

/**
 * Global logger utility for logging messages to the log terminal
 */
export class Logger {
    constructor(private source: string) {}

    info(message: string) {
        this.log(message, 'info');
    }

    warning(message: string) {
        this.log(message, 'warning');
    }

    error(message: string) {
        this.log(message, 'error');
    }

    debug(message: string) {
        this.log(message, 'debug');
    }

    private log(message: string, level: LogLevel) {
        sendToTerminal(this.source, message, level);
    }
}

/**
 * Send a log message to the terminal (or buffer it if terminal not ready)
 */
function sendToTerminal(source: string, message: string, level: LogLevel) {
    if (typeof window !== 'undefined' && (window as any).logToTerminal) {
        (window as any).logToTerminal(source, message, level);
    } else {
        // Buffer the message until terminal is ready
        messageBuffer.push({ source, message, level });
        // Also log to console as fallback
        originalConsole[level === 'error' ? 'error' : level === 'warning' ? 'warn' : level === 'debug' ? 'debug' : 'log'](
            `[${source}] ${message}`
        );
    }
}

/**
 * Initialize console interception globally
 * Note: This is called automatically when the logger module is imported
 */
export function initializeConsoleInterception() {
    console.log = function(...args: any[]) {
        originalConsole.log.apply(console, args);
        sendToTerminal('Console', args.map(a => formatArg(a)).join(' '), 'info');
    };
    
    console.info = function(...args: any[]) {
        originalConsole.info.apply(console, args);
        sendToTerminal('Console', args.map(a => formatArg(a)).join(' '), 'info');
    };
    
    console.warn = function(...args: any[]) {
        originalConsole.warn.apply(console, args);
        sendToTerminal('Console', args.map(a => formatArg(a)).join(' '), 'warning');
    };
    
    console.error = function(...args: any[]) {
        originalConsole.error.apply(console, args);
        sendToTerminal('Console', args.map(a => formatArg(a)).join(' '), 'error');
    };
    
    console.debug = function(...args: any[]) {
        originalConsole.debug.apply(console, args);
        sendToTerminal('Console', args.map(a => formatArg(a)).join(' '), 'debug');
    };
}

// Auto-initialize console interception when this module is imported
initializeConsoleInterception();

/**
 * Flush buffered messages to the terminal
 * Called by the log terminal component when it's ready
 */
export function flushLogBuffer() {
    if (typeof window !== 'undefined' && (window as any).logToTerminal) {
        while (messageBuffer.length > 0) {
            const msg = messageBuffer.shift();
            if (msg) {
                (window as any).logToTerminal(msg.source, msg.message, msg.level);
            }
        }
    }
}

/**
 * Create a logger instance for a specific source
 */
export function createLogger(source: string): Logger {
    return new Logger(source);
}

