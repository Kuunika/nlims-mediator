import { ResourceTypesEnum } from 'src/common/constants/resource-types.constants';
import { TestResult } from 'src/common/interfaces/lab-test-result';
import { IDiagnosticReport } from 'src/patients/interfaces/diagnostic-report.interface';

export function toFHIRDiagnosticReport(
  reports: Array<TestResult>,
): Array<IDiagnosticReport> {
  return reports.map(
    (report): IDiagnosticReport => ({
      resourceType: ResourceTypesEnum.DIAGNOSTIC_REPORT,
      performer: [
        {
          reference: 'Clinton Health Access Initiative',
          display: 'CHAI',
        },
      ],
      effectiveDate: report.datetested,
      category: [
        {
          coding: [
            {
              code: 'COVID',
              display: 'COVID-19',
            },
          ],
        },
      ],
      result: [
        {
          reference: `observation/${report.result.toLowerCase()}`,
        },
      ],
    }),
  );
}
