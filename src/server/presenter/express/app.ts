import { Router } from 'express';
import loggerFactory from '../../logger/factory';
import repoFactory from '../../repo/factory';
import serviceFactory from '../../service/factory';
import AppConfig from './AppConfig';
import presenterFactory from './factory';

export default (config: AppConfig): Router => {
    const repo = repoFactory(config.repo);
    const logger = loggerFactory(config.logger);
    const service = serviceFactory({ logger, repo });
    const presenter = presenterFactory({
        bodyParserLimit: config.bodyParserLimit,
        enableHotReloading: config.enableHotModuleReloading,
        logger,
        morganDirectory: config.morganDirectory,
        service,
    });
    return presenter;
};
