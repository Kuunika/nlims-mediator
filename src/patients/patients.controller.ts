import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { PatientDto } from 'src/common/dtos/patient.dto';
import { LIMSPatientNotFoundException } from 'src/common/exceptions/lims-patient-not-found.exception';
import { LIMSService } from 'src/lims/lims.service';
import { toFHIRPatient } from 'src/utils/patient.formatters';
import { IPatient } from './interfaces/patient.interface';

@Controller('patients')
export class PatientsController {
  constructor(private readonly limsService: LIMSService) {}

  @ApiOkResponse({ type: PatientDto })
  @ApiNotFoundResponse()
  @ApiInternalServerErrorResponse()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IPatient> {
    try {
      const payload = await this.limsService.findPatientById(id);
      return toFHIRPatient(payload.body.shift());
    } catch (error) {
      if (error instanceof LIMSPatientNotFoundException)
        throw new NotFoundException(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }
}
