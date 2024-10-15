import { IVehicle } from "../services/interfaces/vehicle.interface";
import { IVehicleRepository } from "./interfaces/vehicle-repository.interface";

export class VehicleRepository implements IVehicleRepository {
  constructor(private vehicleRepository: IVehicleRepository = vehicleRepository) {}
  
  findAll(): IVehicle[] {
    return this.vehicleRepository.findAll();
  }
  create(vehicle: IVehicle): void {
    this.vehicleRepository.create(vehicle);
  }
  findById(id: string) {
    return this.vehicleRepository.findById(id);
  }
  update(vehicle: IVehicle): void {
    this.vehicleRepository.update(vehicle);
  }
  delete(id: string): void {
    this.vehicleRepository.delete(id);
  }
}
