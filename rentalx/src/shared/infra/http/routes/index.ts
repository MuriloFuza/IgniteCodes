import { Router } from 'express';

import { accountRoutes } from './accounts.routes';
import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './Specifications.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);
router.use('/accounts', accountRoutes);
router.use('/cars', carsRoutes);
router.use(authenticateRoutes);

export { router };
