import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosticReportsController } from './diagnostic-reports.controller';

describe('DiagnosticReportsController', () => {
  let controller: DiagnosticReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosticReportsController],
    }).compile();

    controller = module.get<DiagnosticReportsController>(DiagnosticReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
