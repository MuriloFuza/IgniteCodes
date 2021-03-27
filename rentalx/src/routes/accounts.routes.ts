import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/userCases/CreateUserController';

const accountRoutes = Router();

const createUserController = new CreateUserController();

accountRoutes.post('/', createUserController.handle);

export { accountRoutes };
