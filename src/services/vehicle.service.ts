import { PostgresVehicleRepository } from "../databases/postgresSQL-vehicles.config";
import { IVehicleRepository } from "../repositories/interfaces/vehicle-repository.interface";
import { IVehicle } from "./interfaces/vehicle.interface";

export class VehicleService {
  constructor(
    private repository: IVehicleRepository = new PostgresVehicleRepository()
  ) {}

  getVehicles(): IVehicle[] {
    return this.repository.findAll();
  }

  saveVehicle(vehicle: IVehicle): void {
    return this.repository.create(vehicle);
  }

  getVehicleById(id: string): IVehicle {
    return this.repository.findById(id);
  }

  updateVehicle(id: string, vehicle: IVehicle): void {
    // lógica para comprobar y obtener el vehículo a actualizar.
    return this.repository.update(vehicle);
  }

  deleteVehicle(id: string): void {
    return this.repository.delete(id);
  }
}
