import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController";
import { ensureAuthenticates } from "@shared/infra/http/middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticates, createRentalController.handle);
rentalRoutes.post(
  "/devolution/:id",
  ensureAuthenticates,
  devolutionRentalController.handle
);

rentalRoutes.get(
  "/user",
  ensureAuthenticates,
  listRentalsByUserController.handle
);

export { rentalRoutes };
