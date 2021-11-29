import dayjs from "dayjs";

import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "@modules/rentals/useCases/createRental/CreateRentalUseCase";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppErrors";

let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let createRentalUseCase: CreateRentalUseCase;
let dayJsDateProvider: DayjsDateProvider;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Rental", () => {
  const DAY_ADD_24_HOURS = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayJsDateProvider = new DayjsDateProvider();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayJsDateProvider,
      carsRepositoryInMemory
    );
  });

  it("should be able to create a new rental", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car name",
      description: "car description",
      brand: "car brand",
      category_id: "car category_id",
      daily_rate: 0,
      fine_amount: 0,
      license_plate: "car license_plate",
    });

    const rental = await createRentalUseCase.execute({
      user_id: "user_id",
      car_id: car.id,
      expected_return_date: DAY_ADD_24_HOURS,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if there is another open to the same user", async () => {
    await rentalsRepositoryInMemory.create({
      car_id: "test",
      expected_return_date: DAY_ADD_24_HOURS,
      user_id: "same_id",
    });

    await expect(
      createRentalUseCase.execute({
        user_id: "same_id",
        car_id: "123123",
        expected_return_date: DAY_ADD_24_HOURS,
      })
    ).rejects.toEqual(new AppError("User is unavailable"));
  });

  it("should not be able to create a new rental if there is another open to the same car", async () => {
    await rentalsRepositoryInMemory.create({
      car_id: "same_id",
      expected_return_date: DAY_ADD_24_HOURS,
      user_id: "123124124",
    });

    await expect(
      createRentalUseCase.execute({
        user_id: "14114141",
        car_id: "same_id",
        expected_return_date: DAY_ADD_24_HOURS,
      })
    ).rejects.toEqual(new AppError("Car is unavailable"));
  });

  it("should not be able to create a new rental with invalid return time", async () => {
    await expect(
      createRentalUseCase.execute({
        user_id: "user_id",
        car_id: "car_id",
        expected_return_date: dayjs().toDate(),
      })
    ).rejects.toEqual(new AppError("Invalid return time!"));
  });
});
