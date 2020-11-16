import { Controller, Get, InternalServerErrorException, NotFoundException, Param } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { DiagnosticReportDto } from 'src/common/dtos/diagnostic-report.dto';
import { LIMSPatientNotFoundException } from 'src/common/exceptions/lims-patient-not-found.exception';
import { LIMSService } from 'src/lims/lims.service';
import { toFHIRDiagnosticReport } from 'src/utils/diagnostic-report.formatters';
import { IDiagnosticReport } from './interfaces/diagnostic-report.interface';

@Controller('patients/:id/diagnostic-reports')
export class PatientsDiagnosticReportsController {
  constructor(private readonly limsService: LIMSService) { }

  @ApiOkResponse({ type: [DiagnosticReportDto] })
  @ApiNotFoundResponse()
  @ApiInternalServerErrorResponse()
  @Get('')
  async findAll(@Param('id') id: string): Promise<Array<IDiagnosticReport>> {
    try {
      const payload = await this.limsService.findPatientById(id);
      return toFHIRDiagnosticReport(payload.body);
    } catch (error) {
      if (error instanceof LIMSPatientNotFoundException) throw new NotFoundException(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }
}
