import { Router } from 'express';
import { CategoriesRepository } from '../Repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  if (categoriesRepository.findByName(name)) {
    return response.status(400).json({ message: 'Categoria já existente!' });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.json(allCategories);
})

export { categoriesRoutes };
