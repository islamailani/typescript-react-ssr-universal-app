import FactoryConfig from './FactoryConfig';
import { Router } from 'express';

export default (_config: FactoryConfig = {}) => {
    const router = Router();



    return router;
}