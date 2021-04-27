import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendForgotPasswordUseCase } from './SendForgotPasswordUseCase';

class SendForgotPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const sendForgotPasswordUseCase = container.resolve(SendForgotPasswordUseCase);

    const email = request.body;

    await sendForgotPasswordUseCase.execute(email);

    return response.send();
  }
}

export { SendForgotPasswordController };
