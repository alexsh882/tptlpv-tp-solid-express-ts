
import { IVehicleRepository } from "../repositories/interfaces/vehicle-repository.interface";
import { IVehicle } from "../services/interfaces/vehicle.interface";

export class MongoVehicleRepository implements IVehicleRepository{
    create(vehicle: IVehicle): void {
        console.log('Vehicle created in MongoDB');   
    }
    delete(id: string): void {
        console.log('Vehicle deleted from MongoDB');
    }
    findAll(): IVehicle[] {
        console.log('Vehicles found in MongoDB');
        return [];
    }
    findById(id: string) {
        console.log('Vehicle found in MongoDB');
        return null;
    }
    update(vehicle: IVehicle): void {
        console.log('Vehicle updated in MongoDB');
    }
}