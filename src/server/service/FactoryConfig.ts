import repoFactory from '../repo/factory';
import loggerFactory from '../logger/factory';

export default interface FactoryConfig {
    readonly repo: ReturnType<typeof repoFactory>;
    readonly logger: ReturnType<typeof loggerFactory>;
}