import { rootContext } from './di';

export type LogLevel = 'info' | 'warning' | 'error' | 'debug';

const LogLevelPriority: Record<LogLevel, number> = {
    'debug': 0,
    'info': 1,
    'warning': 2,
    'error': 3,
};

// Global log level filter
let globalLogLevel: LogLevel = 'debug';

// Store original console methods before any interception
const originalConsole = {
    log: console.log.bind(console),
    info: console.info.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
    debug: console.debug.bind(console)
};

// Log handler type
type LogHandler = (source: string, message: string, level: LogLevel) => void;

// Registered log handler (set by UI components like k-log-terminal)
let logHandler: LogHandler | null = null;

// Message buffer for logs that occur before handler is registered
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
 * Global logger utility for logging messages
 */
export class Logger {
    constructor(private source: string) {}

    info(message: string) {
        this.log(message, 'info');
    }

    warning(message: string) {
        this.log(message, 'warning');
    }

    warn(message: string) {
        this.log(message, 'warning');
    }

    error(message: string) {
        this.log(message, 'error');
    }

    debug(message: string) {
        this.log(message, 'debug');
    }

    private log(message: string, level: LogLevel) {
        dispatch(this.source, message, level);
    }
}

/**
 * Check if a log level should be displayed based on current filter
 */
function shouldLog(level: LogLevel): boolean {
    return LogLevelPriority[level] >= LogLevelPriority[globalLogLevel];
}

/**
 * Dispatch a log message to the registered handler (or buffer it if no handler registered)
 */
function dispatch(source: string, message: string, level: LogLevel) {
    if (!shouldLog(level)) {
        return;
    }

    if (logHandler) {
        logHandler(source, message, level);
    } else {
        // Buffer the message until handler is registered
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
        dispatch('Console', args.map(a => formatArg(a)).join(' '), 'info');
    };
    
    console.info = function(...args: any[]) {
        originalConsole.info.apply(console, args);
        dispatch('Console', args.map(a => formatArg(a)).join(' '), 'info');
    };
    
    console.warn = function(...args: any[]) {
        originalConsole.warn.apply(console, args);
        dispatch('Console', args.map(a => formatArg(a)).join(' '), 'warning');
    };
    
    console.error = function(...args: any[]) {
        originalConsole.error.apply(console, args);
        dispatch('Console', args.map(a => formatArg(a)).join(' '), 'error');
    };
    
    console.debug = function(...args: any[]) {
        originalConsole.debug.apply(console, args);
        dispatch('Console', args.map(a => formatArg(a)).join(' '), 'debug');
    };
}

// Auto-initialize console interception when this module is imported
initializeConsoleInterception();

/**
 * Register a handler to receive log messages
 * Also flushes any buffered messages to the new handler
 */
export function registerLogHandler(handler: LogHandler) {
    logHandler = handler;
    
    // Flush buffered messages
    while (messageBuffer.length > 0) {
        const msg = messageBuffer.shift();
        if (msg) {
            handler(msg.source, msg.message, msg.level);
        }
    }
}

/**
 * Unregister the current log handler
 */
export function unregisterLogHandler() {
    logHandler = null;
}

/**
 * Create a logger instance for a specific source
 */
export function createLogger(source: string): Logger {
    return new Logger(source);
}

/**
 * Set the global log level filter
 */
export function setLogLevel(level: LogLevel) {
    globalLogLevel = level;
}

/**
 * Default logger instance for backward compatibility
 * This provides a simple logger similar to the old logging.ts
 */
const defaultLogger = createLogger('System');

// Register default logger in DI container for backward compatibility
rootContext.put('logger', defaultLogger);

export default defaultLogger;

