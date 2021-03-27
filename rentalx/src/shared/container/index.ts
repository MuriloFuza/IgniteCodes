import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementation/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/Repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/Repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/Repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../modules/cars/Repositories/ISpecificationRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
