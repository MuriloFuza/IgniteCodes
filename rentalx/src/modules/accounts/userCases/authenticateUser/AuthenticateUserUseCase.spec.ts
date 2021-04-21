import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '@modules/accounts/userCases/CreateUser/CreateUserUseCase';
import { AppError } from '@shared/errors/AppError';

import { AuthenticateUserUserCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUserCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Autenticação do usuário', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUserCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('Deve ser capaz de autenticar um usuário', async () => {
    const user: ICreateUserDTO = {
      driver_license: '001234',
      email: 'user@jest.com',
      password: '1234',
      name: 'userJest',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('Não deve ser capaz de autenticar um usuário inexistente', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'dickvigarista@jest.com',
        password: '1234',
      }),
    ).rejects.toEqual(new AppError('Email or password incorrect!'));
  });

  it('Não deve ser capaz de autenticar um usuário com a senha incorreta', async () => {
    const user: ICreateUserDTO = {
      driver_license: '001234',
      email: 'user2@jest.com',
      password: '1234',
      name: 'userJest2',
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: '1235',
      }),
    ).rejects.toEqual(new AppError('Email or password incorrect!'));
  });
});
