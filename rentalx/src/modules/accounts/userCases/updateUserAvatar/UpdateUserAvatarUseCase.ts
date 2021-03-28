import { inject, injectable } from 'tsyringe';

import { deleteFile } from '../../../../utils/file';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
    avatarFIle: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

  async execute({ user_id, avatarFIle }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatarFIle;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
