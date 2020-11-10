import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosticReportsService } from './diagnostic-reports.service';

describe('DiagnosticReportsService', () => {
  let service: DiagnosticReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagnosticReportsService],
    }).compile();

    service = module.get<DiagnosticReportsService>(DiagnosticReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
