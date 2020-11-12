import { Module } from '@nestjs/common';
import { EvenController } from './even.controller';
import { EvenService } from './even.service';

@Module({
  controllers: [EvenController],
  providers: [EvenService]
})
export class EvenModule {}
