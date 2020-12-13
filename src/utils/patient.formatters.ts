import { ResourceTypesEnum } from 'src/common/constants/resource-types.constants';
import { TestResult } from 'src/common/interfaces/lab-test-result';
import { IPatient } from 'src/patients/interfaces/patient.interface';

export function toFHIRPatient(patient: TestResult): IPatient {
  return {
    resourceType: ResourceTypesEnum.PATIENT,
    name: [
      {
        family: patient.surname,
        given: [patient.firstname],
        use: `${patient.surname} ${patient.firstname}`,
      },
    ],
    identifier: [
      {
        use: 'official',
        value: patient.passportNo || patient.patientID,
      },
    ],
    address: [
      {
        country: patient.nationality || 'NA',
      },
    ],
  };
}
