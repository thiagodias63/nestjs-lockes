import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.BD_HOSTNAME || 'localhost',
    port: Number(process.env.BD_PORT) || 3306,
    username: process.env.BD_USERNAME || 'root',
    password: process.env.BD_PASSWORD || '',
    database: process.env.BD_DATABASE ||  'lockers',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true
}