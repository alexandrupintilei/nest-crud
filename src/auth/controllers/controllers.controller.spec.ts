import { Test, TestingModule } from '@nestjs/testing';
import { ControllersController } from './controllers.controller';

describe('Controllers Controller', () => {
  let controller: ControllersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllersController],
    }).compile();

    controller = module.get<ControllersController>(ControllersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});