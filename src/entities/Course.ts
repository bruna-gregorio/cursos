import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("courses")
class Course {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  course: string;

  @Column()
  description: string;

  @Column()
  vacancies: string;

  @CreateDateColumn()
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Course }