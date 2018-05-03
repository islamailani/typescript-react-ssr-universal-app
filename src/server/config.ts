
import getNumberOption from '../utils/getNumberOption';
import getStringOption from '../utils/getStringOption';

const DEFAULT_EXPRESS_PORT = 80;

export default {
  express: {
    bodyParserLimit: getStringOption(process.env.EXPRESS_BODY_PARSER_LIMIT, '5mb'),
    host: getStringOption(process.env.EXPRESS_HOST, 'localhost'),
    morganDirectory: getStringOption(
      process.env.EXPRESS_MORGAN_DIRECTORY,
      `${process.cwd()}/storage/accessLogs`,
    ),
    port: getNumberOption(process.env.EXPRESS_PORT, DEFAULT_EXPRESS_PORT),
  },
  logger: {
    level: 'info',
  },
}