import { ISpecificationRepository } from '../Repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) { }

  execute({ name, description }: IRequest): void {
    if (this.specificationRepository.findByName(name)) {
      throw new Error('Specification already exists!');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
