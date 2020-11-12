import { Module } from '@nestjs/common';
import { EvenModule } from './even/even.module';
import { LockerModule } from './locker/locker.module';

@Module({
  imports: [EvenModule, LockerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
