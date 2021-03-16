import { Specification } from '../../models/Specification';
import { ISpecificationRepository } from '../../Repositories/ISpecificationRepository';

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) { }

  execute(): Specification[] {
    const specification = this.specificationRepository.list();

    return specification;
  }
}

export { ListSpecificationUseCase };
