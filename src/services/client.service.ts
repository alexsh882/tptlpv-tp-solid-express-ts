import { MongoClientRepository } from "../databases/mongo-clients.config";
import { IClientRepository } from "../repositories/interfaces/client-repository.interface";
import { IClient } from "./interfaces/client.interface";

export class ClientService {
  constructor(
    private repository: IClientRepository = new MongoClientRepository()
  ) {}

  async getClients(): Promise<IClient[]> {
    return this.repository.findAll();
  }

  async saveClient(client: IClient): Promise<void> {
    this.repository.create(client);
  }

  async getClientById(id: string): Promise<IClient> {
    return this.repository.findById(id);
  }

  async updateClient(id: string, Client: IClient): Promise<void> {
    // lógica para actualizar un cliente
    return this.repository.update(Client);
  }

  async deleteClient(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
