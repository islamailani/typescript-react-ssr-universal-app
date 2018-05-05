import express from 'express';
import { createServer } from 'http';
import Loadable from 'react-loadable';
import config from '../../config';
import loggerFactory from '../../logger/factory';
import app from './app';
import handleListen from './utils/handleListen';

const expressApp = express();

expressApp.use('', app({
  bodyParserLimit: config.express.bodyParserLimit,
  enableHotModuleReloading: false,
  morganDirectory: config.express.morganDirectory,
}));

const server = createServer(expressApp);

server.listen(config.express.port, () => {
  const logger = loggerFactory(config.logger);
  logger.info(`Listening on http://${config.express.host}:${config.express.port}`);
  handleListen(logger);
});