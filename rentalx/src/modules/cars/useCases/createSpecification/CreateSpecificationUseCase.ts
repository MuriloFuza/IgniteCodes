import { inject, injectable } from 'tsyringe';

import { ISpecificationRepository } from '../../Repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository,
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    if (await this.specificationRepository.findByName(name)) {
      throw new Error('Specification already exists!');
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
