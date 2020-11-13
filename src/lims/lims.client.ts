import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Axios, { AxiosInstance } from "axios";
import { LIMSPatientNotFoundException } from "src/common/exceptions/lims-patient-not-found.exception";
import { LabTestResult } from "src/common/interfaces/lab-test-result";

@Injectable()
export class LIMSClient {
    private client: AxiosInstance;
    private readonly token: string;
    private readonly logger = new Logger('LIMSClient');

    constructor(private readonly configService: ConfigService) {
                    this.client = Axios.create({
                        baseURL: this.configService.get<string>('LIMS_API_HOST')
                    });
                    this.token = this.configService.get<string>('LIMS_API_TOKEN')
                }

    async findPatientById(id: string): Promise<LabTestResult> {
        this.logger.debug(`Looking up patient with id ${id}.`);
        const data = (await this.client.get(`/covid_api/data/extract.php?token=${this.token}&patient_id=${id}`)).data as LabTestResult;
        if (!data.body.length) {
            this.logger.error(`Could not find patient with id ${id}.`);
            throw new LIMSPatientNotFoundException(`Patient ${id} could not be found.`);
        }
        return data;
    }
}