import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";

@Entity("cars_image")
class CarImage {
  @PrimaryColumn()
  id?: string;

  @Column()
  // @ManyToOne(() => Car)
  // @JoinColumn({ name: "car_id" })
  car_id: string;

  @Column()
  image_name: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { CarImage };
