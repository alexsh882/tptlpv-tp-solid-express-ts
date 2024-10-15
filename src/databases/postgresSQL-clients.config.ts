import { IClientRepository } from "../repositories/interfaces/client-repository.interface";
import { IClient } from "../services/interfaces/client.interface";

export class PostgresClientRepository implements IClientRepository {
  create(client: IClient): void {
    console.log("client created in PostgresSQL");
  }
  delete(id: string): void {
    console.log("client deleted from PostgresSQL");
  }
  findAll(): IClient[] {
    console.log("clients found in PostgresSQL");
    return [];
  }
  findById(id: string) {
    console.log("client found in PostgresSQL");
    return null;
  }
  update(client: IClient): void {
    console.log("client updated in PostgresSQL");
  }
}
