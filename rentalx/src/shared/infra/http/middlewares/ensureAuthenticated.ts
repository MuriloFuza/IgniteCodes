import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '@config/auth';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayLoad{
  sub:string;
}

// eslint-disable-next-line max-len
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction): Promise<void> {
  const authHeader = request.headers.authorization;
  const userTokenRepository = new UsersTokensRepository();

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, auth.secret_refresh_token) as IPayLoad;

    const user = await userTokenRepository.findByIdAndRefreshToken(user_id, token);

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
