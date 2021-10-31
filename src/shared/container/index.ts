import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepostirory } from "../../modules/cars/repositories/implementations/SpecificationRepostirory";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepostirory",
  SpecificationRepostirory
);
