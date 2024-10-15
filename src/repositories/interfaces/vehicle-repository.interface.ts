import { IVehicle } from "../../services/interfaces/vehicle.interface";

export interface IVehicleRepository {
    findAll(): IVehicle[];
    create(vehicle: IVehicle): void;
    findById(id: string): any;
    update(vehicle: IVehicle): void;
    delete(id: string): void;
  }