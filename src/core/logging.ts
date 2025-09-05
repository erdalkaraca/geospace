import {rootContext} from "./di.ts";

enum LogLevel {
 DEBUG,
 INFO,
 WARN,
 ERROR,
}

class Logger {
 private level: LogLevel = LogLevel.INFO;

 constructor() {
  // Initialize logging configuration here, if needed
 }

 setLevel(level: LogLevel): void {
  this.level = level;
 }

 debug(message: string): void {
  if (this.level === LogLevel.DEBUG) {
   console.log(`[DEBUG] ${message}`);
  }
 }

 info(message: string): void {
  if (this.level === LogLevel.INFO || this.level === LogLevel.DEBUG) {
   console.log(`[INFO] ${message}`);
  }
 }

 warn(message: string): void {
  if (this.level === LogLevel.WARN || this.level === LogLevel.INFO || this.level === LogLevel.DEBUG) {
   console.warn(`[WARN] ${message}`);
  }
 }

 error(message: string): void {
  console.error(`[ERROR] ${message}`);
 }
}

const logger = new Logger();
logger.setLevel(LogLevel.DEBUG);
export default logger;

rootContext.put("logger", logger)