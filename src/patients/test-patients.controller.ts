import { Controller, Get, InternalServerErrorException, NotFoundException, Param } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { PatientDto } from 'src/common/dtos/patient.dto';
import { LIMSPatientNotFoundException } from 'src/common/exceptions/lims-patient-not-found.exception';
import { toFHIRDiagnosticReport } from 'src/utils/diagnostic-report.formatters';
import { toFHIRPatient } from 'src/utils/patient.formatters';
import { IDiagnosticReport } from './interfaces/diagnostic-report.interface';
import { IPatient } from './interfaces/patient.interface';
import { TestPatientService } from './test-patient.service';

@Controller('test-patients')
export class TestPatientsController {
  constructor(private readonly patientService: TestPatientService) { }

  @ApiOkResponse({ type: PatientDto })
  @ApiNotFoundResponse()
  @ApiInternalServerErrorResponse()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IPatient> {
    try {
      const payload = await this.patientService.findPatientById(id);
      return toFHIRPatient(payload.shift());
    } catch (error) {
      if (error instanceof LIMSPatientNotFoundException) throw new NotFoundException(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }

  @ApiOkResponse({ type: PatientDto })
  @ApiNotFoundResponse()
  @ApiInternalServerErrorResponse()
  @Get(':id/diagnostic-reports')
  async findReport(@Param('id') id: string): Promise<Array<IDiagnosticReport>> {
    try {
      const payload = await this.patientService.findPatientById(id);
      return toFHIRDiagnosticReport(payload);
    } catch (error) {
      if (error instanceof LIMSPatientNotFoundException) throw new NotFoundException(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }
}
