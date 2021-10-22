import { Category } from "../../model/Category";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): Category {
    const specificationAlredyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new Error("Specification alredy exists");
    }

    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export { CreateSpecificationUseCase };
