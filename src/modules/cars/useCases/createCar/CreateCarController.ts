import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "@modules/cars/useCases/createCar/CreateCarUseCase";

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      category_id,
      brand,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      category_id,
      brand,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    });

    return response.json(car);
  }
}

export { CreateCarController };
