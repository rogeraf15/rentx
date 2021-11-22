import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const newCar = await carsRepositoryInMemory.create({
      name: "Car",
      category_id: "Car category_id",
      brand: "Car brand",
      daily_rate: 90,
      description: "Car description",
      fine_amount: 35,
      license_plate: "XXX-XXX",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([newCar]);
  });

  it("should be able to list all available cars by name", async () => {
    const newCar = await carsRepositoryInMemory.create({
      name: "Car",
      category_id: "Car category_id",
      brand: "Car brand",
      daily_rate: 90,
      description: "Car description",
      fine_amount: 35,
      license_plate: "XXX-XXX",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car",
    });

    expect(cars).toEqual([newCar]);
  });

  it("should be able to list all available cars by brand", async () => {
    const newCar = await carsRepositoryInMemory.create({
      name: "Car",
      category_id: "Car category_id",
      brand: "Car brand",
      daily_rate: 90,
      description: "Car description",
      fine_amount: 35,
      license_plate: "XXX-XXX",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car brand",
    });

    expect(cars).toEqual([newCar]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const newCar = await carsRepositoryInMemory.create({
      name: "Car",
      category_id: "Car category_id",
      brand: "Car brand",
      daily_rate: 90,
      description: "Car description",
      fine_amount: 35,
      license_plate: "XXX-XXX",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "Car category_id",
    });

    expect(cars).toEqual([newCar]);
  });
});
