import { Test, TestingModule } from '@nestjs/testing';
import { EvenController } from './even.controller';

describe('EvenController', () => {
  let controller: EvenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvenController],
    }).compile();

    controller = module.get<EvenController>(EvenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return if 2 is even', async() => {
    const result = await controller.askNumberIsEven(2)
    expect(result).toBe(true)
  })
});
