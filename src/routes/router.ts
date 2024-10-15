import { Router } from "express";
import { ClientRoutes } from "./clients.routes";
import { VehicleRoutes } from "./vehicles.routes";

export class AppRouter {
  static get routes(): Router {
    const router = Router();

    router.use("/api/clients", ClientRoutes.routes);
    router.use("/api/vehicles", VehicleRoutes.routes);

    return router;
  }
}
