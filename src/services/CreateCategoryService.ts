import { Category } from "../model/Category";
import { ICategoryRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest): Category {
    const categoryAlredyExists = this.categoriesRepository.findByName(name);

    if (categoryAlredyExists) {
      throw new Error("Category alredy exists");
    }

    const category = this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategoryService };
