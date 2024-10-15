import { IVehicleRepository } from "../repositories/interfaces/vehicle-repository.interface";
import { IVehicle } from "../services/interfaces/vehicle.interface";

const pseudoDB = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 20000,
  },
  {
    id: "2",
    brand: "Chevrolet",
    model: "Spark",
    year: 2021,
    price: 15000,
  },
  {
    id: "3",
    brand: "Ford",
    model: "Fiesta",
    year: 2019,
    price: 18000,
  },
];

export class PostgresVehicleRepository implements IVehicleRepository {
  create(vehicle: IVehicle) {
    console.log("Vehicle created in PostgresSQL");
    pseudoDB.push(vehicle);
    return vehicle;
  }
  delete(id: string): void {
    console.log("Vehicle deleted from PostgresSQL");
    const index = pseudoDB.findIndex((vehicle) => vehicle.id === id);
    pseudoDB.splice(index, 1);
    return;
  }
  findAll(): IVehicle[] {
    console.log("Vehicles found in PostgresSQL");
    return pseudoDB;
  }
  findById(id: string) {
    console.log("Vehicle found in PostgresSQL");
    return pseudoDB.filter((vehicle) => vehicle.id === id);
  }
  update(vehicle: IVehicle): IVehicle {
    console.log("Vehicle updated in PostgresSQL");

    const index = pseudoDB.findIndex((v) => v.id === vehicle.id);
    pseudoDB[index] = vehicle;
    return pseudoDB[index];
  }
}
