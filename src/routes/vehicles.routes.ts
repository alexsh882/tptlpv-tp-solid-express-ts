import { Router } from "express";
import { VehicleController } from "../controllers/vehicle.controller";


export class VehicleRoutes {
  static get routes(): Router {
    const router = Router();

    const vehicleController = new VehicleController();

    router.get("/", vehicleController.findAll);

    router.post("/", vehicleController.create);

    router.get("/:id", vehicleController.findById);

    router.patch("/:id", vehicleController.update);

    router.delete("/:id", vehicleController.delete);

    return router;
  }
}
