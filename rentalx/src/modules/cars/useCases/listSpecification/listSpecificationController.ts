import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './listSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) { }

  handle(request: Request, response: Response): Response {
    const allSpecification = this.listSpecificationUseCase.execute();

    return response.json(allSpecification);
  }
}

export { ListSpecificationController };
