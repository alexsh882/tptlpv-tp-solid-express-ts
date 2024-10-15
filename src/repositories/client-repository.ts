import { IClient } from "../services/interfaces/client.interface";
import { IClientRepository } from "./interfaces/client-repository.interface";

export class ClientRepository implements IClientRepository {
  constructor(private clientRepository: IClientRepository = clientRepository) {}

  findAll(): IClient[] {
    return this.clientRepository.findAll();
  }
  create(client: IClient): void {
    this.clientRepository.create(client);
  }
  findById(id: string) {
    return this.clientRepository.findById(id);
  }
  update(client: IClient): void {
    this.clientRepository.update(client);
  }
  delete(id: string): void {
    this.clientRepository.delete(id);
  }
}
