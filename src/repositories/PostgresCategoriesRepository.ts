import { Category } from "../model/Category";
import { ICategoryRepository } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  create({ name, description }): Category {
    console.log(name, description);
    return null;
  }
  list(): Category[] {
    return null;
  }
}

export { PostgresCategoriesRepository };
