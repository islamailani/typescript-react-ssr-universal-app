import { defaultTo } from 'lodash';
import * as moment from 'moment';
import * as winston from 'winston';
import FactoryConfig from './FactoryConfig';

const getTime = () => moment().format('YYYY-MM-DD HH:mm:ss:SSS');

export default (config: FactoryConfig = {}) => {
    winston.cli();
    return new winston.Logger({
        exitOnError: false,
        transports: [
            new (winston.transports.Console)({
                colorize: true,
                handleExceptions: true,
                humanReadableUnhandledException: true,
                level: defaultTo(config.level, 'info'),
                prettyPrint: true,
                stderrLevels: ['error'],
                timestamp: getTime,
            }),
        ],
    });
}
