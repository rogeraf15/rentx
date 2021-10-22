import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): Category;
  list(): Category[];
}

export { ICategoryRepository };
