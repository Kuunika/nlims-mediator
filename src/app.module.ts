import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsController } from './patients/patients.controller';
import { DiagnosticReportsController } from './diagnostic-reports/diagnostic-reports.controller';

@Module({
  imports: [],
  controllers: [AppController, PatientsController, DiagnosticReportsController],
  providers: [AppService],
})
export class AppModule {}
