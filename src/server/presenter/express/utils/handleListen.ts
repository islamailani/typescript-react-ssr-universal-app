import { LoggerInstance } from 'winston';

export default (logger: LoggerInstance) => {
  const handleExit = (event: string) => {
    return (error?: any) => {
      if (error !== undefined) {
        logger.error(error.stack);
      }
      logger.info(event);
      process.exit();
    };
  };

  if (process.send !== undefined) {
    logger.info('Process ready');
    process.send('ready');
  }

  process.on('exit', handleExit('exit'));
  process.on('SIGINT', handleExit('SIGINT'));
  process.on('SIGTERM', handleExit('SIGTERM'));
  process.on('uncaughtException', handleExit('uncaughtException'));
};
