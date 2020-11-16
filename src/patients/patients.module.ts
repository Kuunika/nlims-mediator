import { Module } from '@nestjs/common';
import { LIMSModule } from 'src/lims/lims.module';
import { PatientsDiagnosticReportsController } from './patients-diagnostic-reports.controller';
import { PatientsController } from './patients.controller';
import { TestPatientService } from './test-patient.service';
import { TestPatientsController } from './test-patients.controller';

@Module({
  imports: [LIMSModule],
  controllers: [
    PatientsController,
    PatientsDiagnosticReportsController,
    TestPatientsController
  ],
  providers: [TestPatientService]
})
export class PatientsModule {}