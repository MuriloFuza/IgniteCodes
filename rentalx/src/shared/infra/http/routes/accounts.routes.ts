import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateUserController } from '@modules/accounts/userCases/CreateUser/CreateUserController';
import { UpdateUserAvatarController } from '@modules/accounts/userCases/updateUserAvatar/UpdateUserAvatarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const accountRoutes = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

accountRoutes.post('/', createUserController.handle);

accountRoutes.use(ensureAuthenticated);
accountRoutes.patch('/avatar', uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { accountRoutes };
