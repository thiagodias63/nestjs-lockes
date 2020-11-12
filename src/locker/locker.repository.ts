import { EntityRepository } from "typeorm";
import { LockerEntity } from "./locker.entity";

@EntityRepository(LockerEntity)
export class LockerRepository {
    
}