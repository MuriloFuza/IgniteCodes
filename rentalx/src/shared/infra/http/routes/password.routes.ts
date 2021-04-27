import { Router } from 'express';

import { SendForgotPasswordController } from '@modules/accounts/userCases/sendForgotPassword/SendForgotPasswordController';

const passwordRoutes = Router();

const sendForgotPasswordController = new SendForgotPasswordController();

passwordRoutes.post('/forgot', sendForgotPasswordController.handle);

export { passwordRoutes };
