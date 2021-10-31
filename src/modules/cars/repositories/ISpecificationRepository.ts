import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findByName(name: string): Promise<Specification>;
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
  list(): Promise<Specification[]>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
