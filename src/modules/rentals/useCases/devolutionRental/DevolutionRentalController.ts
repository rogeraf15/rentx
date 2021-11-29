import { Request, Response } from "express";
import { container } from "tsyringe";

import { DevolutionRentalUseCase } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalUseCase";

class DevolutionRentalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const devolutionRentalUseCase = container.resolve(DevolutionRentalUseCase);

    const devolution = await devolutionRentalUseCase.execute(id);

    return response.json(devolution);
  }
}

export { DevolutionRentalController };
