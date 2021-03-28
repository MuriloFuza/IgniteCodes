import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/userCases/CreateUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/userCases/updateUserAvatar/UpdateUserAvatarController';

const accountRoutes = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

accountRoutes.use(ensureAuthenticated);
accountRoutes.post('/', createUserController.handle);

accountRoutes.patch('/avatar', uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { accountRoutes };
