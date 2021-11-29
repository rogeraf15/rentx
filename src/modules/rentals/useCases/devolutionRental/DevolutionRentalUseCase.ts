import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppErrors";

@injectable()
class DevolutionRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute(id: string): Promise<Rental> {
    const MINIMUM_DAILY = 1; // 1 day

    const rental = await this.rentalsRepository.findById(id);
    const car = await this.carsRepository.findById(rental.car_id);

    if (!rental) {
      throw new AppError("Rental does not exisits!");
    }

    const dateNow = this.dateProvider.dateNow();

    const diffInDays = this.dateProvider.compareInDays(
      rental.start_date,
      this.dateProvider.dateNow()
    );

    const daily = diffInDays <= 0 ? MINIMUM_DAILY : diffInDays;

    const delay = this.dateProvider.compareInDays(
      dateNow,
      rental.expected_return_date
    );

    const calculateFine = delay * car.fine_amount;

    const total = delay > 0 ? calculateFine : 0;

    const rentalTotal = total + daily * car.daily_rate;

    rental.end_date = this.dateProvider.dateNow();
    rental.total = rentalTotal;

    await this.rentalsRepository.create(rental);
    await this.carsRepository.updateAvailable(car.id, true);

    return rental;
  }
}

export { DevolutionRentalUseCase };
