import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepostirory")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Specification> {
    const specificationAlredyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new Error("Specification alredy exists");
    }

    const specification = await this.specificationRepository.create({
      name,
      description,
    });

    console.log(specification);

    return specification;
  }
}

export { CreateSpecificationUseCase };
