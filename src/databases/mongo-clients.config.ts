import { IClientRepository } from "../repositories/interfaces/client-repository.interface";
import { IClient } from "../services/interfaces/client.interface";

const pseudoMongoDB = [
  {
    id: "1",
    name: "Client 1",
    email: "example@email.com",
    phone: "12354678",
  },
  {
    id: "2",
    name: "Client 2",
    email: "example2@gmail.com",
    phone: "12354678",
  },
  {
    id: "3",
    name: "Client 3",
    email: "mail@gmail.com",
    phone: "12354678",
  },
];

export class MongoClientRepository implements IClientRepository {
  findAll(): IClient[] {
    console.log("Clients found in MongoDB");
    return pseudoMongoDB;
  }
  findById(id: string) {
    console.log("Client found in MongoDB");
    return pseudoMongoDB.filter((client) => client.id === id);
  }
  create(client: IClient): void {
    console.log("Client created in MongoDB");
  }
  update(client: IClient) {
    console.log("Client updated in MongoDB");
    const index = pseudoMongoDB.findIndex((c) => c.id === client.id);
    pseudoMongoDB[index] = client;
    return pseudoMongoDB[index];
  }
  delete(id: string): void {
    console.log("Client deleted from MongoDB");
    const index = pseudoMongoDB.findIndex((client) => client.id === id);
    pseudoMongoDB.splice(index, 1);
    return;
  }
}
