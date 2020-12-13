import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Axios, { AxiosInstance } from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { LIMSPatientNotFoundException } from 'src/common/exceptions/lims-patient-not-found.exception';
import { LabTestResult } from 'src/common/interfaces/lab-test-result';

@Injectable()
export class LIMSClient {
  private client: AxiosInstance;
  private readonly token: string;

  constructor(
    private readonly configService: ConfigService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.client = Axios.create({
      baseURL: this.configService.get<string>('LIMS_API_HOST'),
    });
    this.token = this.configService.get<string>('LIMS_API_TOKEN');
  }

  async findPatientById(id: string): Promise<LabTestResult> {
    this.logger.info(`Looking up patient with id ${id}.`);
    const url = `/covid_api/data/extract.php?token=${this.token}&passportNo=${id}`;
    const data = (await this.client.get(url)).data as LabTestResult;
    if (!data.body.length) {
      this.logger.error(`Could not find patient with id ${id}.`);
      throw new LIMSPatientNotFoundException(
        `Patient ${id} could not be found.`,
      );
    }
    this.logger.info(`Found patient with id ${id}.`);
    return data;
  }
}
