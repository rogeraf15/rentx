import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarImagesUseCase } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesUseCase";

interface IFiles {
  filename: string;
}

class UploadCarImagesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const fileNames = images.map((file) => file.filename);

    const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase);

    await uploadCarImagesUseCase.execute({
      car_id: id,
      images_name: fileNames,
    });

    return response.status(201).send();
  }
}

export { UploadCarImagesController };
