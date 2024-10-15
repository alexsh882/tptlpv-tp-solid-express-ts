import { Request, Response } from "express";
import { ClientService } from "../services/client.service";
import { IClient } from "../services/interfaces/client.interface";

export class ClientController {
  constructor(private clientService: ClientService = new ClientService()) {}

  create = async (req: Request, res: Response) => {
    const client: IClient = req.body;

    await this.clientService.saveClient(client);

    return res.status(201).json({
      message: "Client created successfully",
    });
  };

  delete = async (req: Request, res: Response) => {
    await this.clientService.deleteClient(req.params.id);
    return res.status(204).json();
  };

  findAll = async (req: Request, res: Response) => {
    const clients = await this.clientService.getClients();

    return res.status(200).json(clients);
  };

  findById = async (req: Request, res: Response) => {
    const client = await this.clientService.getClientById(req.params.id);
    return res.json(client);
  };

  update = async (req: Request, res: Response) => {
    const updatedClient = await this.clientService.updateClient(
      req.params.id,
      req.body
    );
    return res.json(updatedClient);
  };
}
