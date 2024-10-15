import { Request, Response } from "express";
import { IVehicleRepository } from "../repositories/interfaces/vehicle-repository.interface";
import { IVehicle } from "../services/interfaces/vehicle.interface";
import { VehicleService } from "../services/vehicle.service";
import { VehicleServiceWithDiscount } from "../services/vehicle-discount.service";

export class VehicleController {
  constructor(private vehicleRepository: VehicleServiceWithDiscount = new VehicleServiceWithDiscount) {}

  create = async (req: Request, res: Response) => {
    this.vehicleRepository.saveVehicle(req.body);
  };

  delete = async (req: Request, res: Response) => {
    this.vehicleRepository.deleteVehicle(req.params.id);
  };

  findAll = async (req: Request, res: Response) => {
    const vehicles = this.vehicleRepository.getVehicles();
    return res.json(vehicles);
  };

  findById = async (req: Request, res: Response) => {
    const vehicle = this.vehicleRepository.getVehicleById(req.params.id);

    return res.json(vehicle);
  };

  update = async (req: Request, res: Response) => {
    this.vehicleRepository.updateVehicle(req.params.id, req.body);
  };

  applyDiscount = async (req: Request, res: Response) => {
    const vehicle = await this.vehicleRepository.applyDiscount(req.params.id);
    
    return res.json(vehicle);
  }
}
