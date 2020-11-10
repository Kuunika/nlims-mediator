import { Module } from '@nestjs/common';
import { PatientsController } from './patients/patients.controller';
import { DiagnosticReportsController } from './diagnostic-reports/diagnostic-reports.controller';

@Module({
  imports: [],
  controllers: [PatientsController, DiagnosticReportsController],
  providers: [],
})
export class AppModule {}
