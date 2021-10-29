import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepostirory implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepostirory;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepostirory {
    if (!SpecificationRepostirory.INSTANCE) {
      SpecificationRepostirory.INSTANCE = new SpecificationRepostirory();
    }
    return SpecificationRepostirory.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationRepostirory };
