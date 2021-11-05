import { Router } from "express";

import { ensureAuthenticates } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRoutes.use(ensureAuthenticates);
specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationsController.handle);

export { specificationRoutes };
