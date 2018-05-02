

import LoggerFactoryConfig from '../../logger/FactoryConfig';
import RepoFactoryConfig from '../../repo/FactoryConfig';

export default interface AppConfig {
    readonly bodyParserLimit: string;
    readonly morganDirectory: string;
    readonly enableHotModuleReloading: boolean;
    readonly repo?: RepoFactoryConfig;
    readonly logger?: LoggerFactoryConfig;
}