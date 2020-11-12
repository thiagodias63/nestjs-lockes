import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LockerEntity {
    @PrimaryColumn()
    @Column()
    id: string

    @Column()
    name: string
}