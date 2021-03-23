import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../Repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }

  async execute({ name, description }: IRequest): Promise<void> {
    if (await this.categoriesRepository.findByName(name)) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
