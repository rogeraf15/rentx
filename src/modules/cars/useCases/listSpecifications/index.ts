import { SpecificationRepostirory } from "../../repositories/implementations/SpecificationRepostirory";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationRepostirory.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
