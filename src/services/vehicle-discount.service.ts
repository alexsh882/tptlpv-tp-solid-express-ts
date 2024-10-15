import { IVehicle } from "./interfaces/vehicle.interface";
import { VehicleService } from "./vehicle.service";

export class VehicleServiceWithDiscount extends VehicleService{
    async applyDiscount(vehicleId: string): Promise<IVehicle> {
        const vehicle = this.getVehicleById(vehicleId);     
        console.log({vehicle});
           
        return {
            ...vehicle,
            price: vehicle.price * 0.9
        }
    }
}