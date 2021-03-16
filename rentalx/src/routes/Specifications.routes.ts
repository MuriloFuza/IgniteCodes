import { response, Router } from 'express';

import { SpecificationRepository } from '../modules/cars/Repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(specificationRepository);

  createSpecificationService.execute({ name, description });

  return response.status(201).json({ message: 'Specification has created' });
});

specificationRoutes.get('/', (request, response) => {
  const allSpecifications = specificationRepository.list();

  return response.json(allSpecifications);
});

export { specificationRoutes };
