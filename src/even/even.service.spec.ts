import { Test, TestingModule } from '@nestjs/testing';
import { EvenService } from './even.service';

describe('EvenService', () => {
  let service: EvenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvenService],
    }).compile();

    service = module.get<EvenService>(EvenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return if 2 is even', () => {
    const askingNumber = { asked: 2}
    expect(service.askNumberIsEven(askingNumber)).toBeTruthy()
  })
});
