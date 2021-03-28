import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementation/UsersRepository';

interface IPayLoad{
  sub:string;
}

// eslint-disable-next-line max-len
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'c8529053f74482ec8b9a3e76da55ff2e') as IPayLoad;

    const usersRespository = new UsersRepository();
    const user = await usersRespository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    request.user = {
      id: user_id,
    };
    next();
  } catch (error) {
    throw new AppError('Invalid token ', 401);
  }
}
