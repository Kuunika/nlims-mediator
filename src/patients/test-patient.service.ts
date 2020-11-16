import { Injectable } from '@nestjs/common';
import { Patients } from 'data/patients';
import { LIMSPatientNotFoundException } from 'src/common/exceptions/lims-patient-not-found.exception';
import { TestResult } from 'src/common/interfaces/lab-test-result';

@Injectable()
export class TestPatientService {
    private readonly patients: Array<TestResult> = Patients;

    async findPatientById(id: string): Promise<Array<TestResult>> {
        const results = this.patients.filter(patient => patient.patientID === id);
        if (!results.length) throw new LIMSPatientNotFoundException(`Patient with id ${id} could not be found.`);
        return results;
    }
}
