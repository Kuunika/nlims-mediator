import { Module } from '@nestjs/common';
import { LIMSModule } from 'src/lims/lims.module';
import { PatientsDiagnosticReportsController } from './patients-diagnostic-reports.controller';
import { PatientsController } from './patients.controller';

@Module({
  imports: [LIMSModule],
  controllers: [PatientsController, PatientsDiagnosticReportsController]
})
export class PatientsModule {}