import { ResourceTypesEnum } from "src/common/constants/resource-types.constants";
import { DiagnosticReportDto } from "src/common/dtos/diagnostic-report.dto";
import { TestResult } from "src/common/interfaces/lab-test-result";
import { IDiagnosticReport } from "src/patients/interfaces/diagnostic-report.interface";

export function toFHIRDiagnosticReport(reports: Array<TestResult>): Array<IDiagnosticReport> {
    return reports.map((report): IDiagnosticReport => ({
        resourceType: ResourceTypesEnum.DIAGNOSTIC_REPORT,
        performer: [
            {
                reference: 'Clinton Health Access Initiative',
                display: 'CHAI'
            }
        ],
        category: [
            {
                coding: [
                    {
                        code: 'COVID',
                        display: 'COVID-19',
                    }
                ],
            },
        ],
        result: [
            {
                reference: `observation/${report.result.toLowerCase()}`
            }
        ]
    }))
}