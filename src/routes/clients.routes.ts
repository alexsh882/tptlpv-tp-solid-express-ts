import { Router } from "express";
import { ClientController } from "../controllers/client.controller";

export class ClientRoutes {
  static get routes(): Router {
    const router = Router();

    const clientController = new ClientController();

    router.get("/", clientController.findAll);

    router.post("/", clientController.create);

    router.get("/:id", clientController.findById);

    router.patch("/:id", clientController.update);

    router.delete("/:id", clientController.delete);

    return router;
  }
}
