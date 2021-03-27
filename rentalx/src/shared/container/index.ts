import { container } from 'tsyringe';

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
