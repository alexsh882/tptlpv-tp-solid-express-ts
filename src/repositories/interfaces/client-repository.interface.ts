import { IClient } from "../../services/interfaces/client.interface";


export interface IClientRepository {
    findAll(): IClient[];
    create(client: IClient): void;
    findById(id: string): any;
    update(client: IClient): void;
    delete(id: string): void;
  }