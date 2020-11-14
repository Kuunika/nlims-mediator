import { Injectable } from '@nestjs/common';
import { LIMSClient } from './lims.client';
import { LabTestResult } from 'src/common/interfaces/lab-test-result';

@Injectable()
export class LIMSService {
    constructor(private readonly limsClient: LIMSClient) {}

    async findPatientById(id: string): Promise<LabTestResult> {
        return await this.limsClient.findPatientById(id);
    }

    async findPatientDiagnosticReport(id: string): Promise<LabTestResult> {
        return await this.limsClient.findPatientById(id);
    }
}
