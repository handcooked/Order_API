/* eslint-disable prettier/prettier */
import pino, { Logger, LoggerOptions } from 'pino';

class CustomLogger {
  private logger: Logger;

  constructor(options?: LoggerOptions) {
    this.logger = pino(options);
  }

  public info(message: string, data?: any): void {
    this.logger.info(message, data);
  }

  public error(message: string, error?: Error): void {
    this.logger.error({ error }, message);
  }

  public debug(message: string, data?: any): void {
    this.logger.debug(data, message);
  }

  public warn(message: string, data?: any): void {
    this.logger.warn(data, message);
  }
}

export default CustomLogger;
