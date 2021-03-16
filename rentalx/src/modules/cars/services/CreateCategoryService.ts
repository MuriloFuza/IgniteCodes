import { ICategoriesRepository } from '../Repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

/**
 * [X] - Definir o tipo de retorno
 * [X] - Alterar o retorno de erro
 * [X] - Acessar o repositorio
 */

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }

  execute({ name, description }: IRequest): void {
    if (this.categoriesRepository.findByName(name)) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
