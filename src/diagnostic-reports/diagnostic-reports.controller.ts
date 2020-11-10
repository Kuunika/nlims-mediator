import { Controller, Get } from '@nestjs/common';

//TODO: work on the actuall impelementation from the API spec given by EGPAF
@Controller('diagnostic-reports')
export class DiagnosticReportsController {
  @Get('')
  async diagnosticReports(): Promise<Array<IDiagnosticReport>> {
    return [
      {
        resourceType: 'DiagnosticReport',
        performer: [
          {
            reference: 'link to retrieve list of test labs',
            display: 'Mars Testing',
          },
        ],
        category: [
          {
            coding: [
              {
                system: 'link to diseases retrieval',
                code: 'COVID',
                display: 'COVID-19',
              },
              {
                code: 'Yellow',
                display: 'Yellow Fever',
              },
            ],
          },
        ],
        result: [
          {
            reference: 'observation/positive',
          },
          {
            reference: 'observation/negative',
          },
        ],
      },
    ];
  }

  @Get(':id')
  async diagnosticReport(): Promise<IDiagnosticReport> {
    return {
      resourceType: 'DiagnosticReport',
      performer: [
        {
          reference: 'link to retrieve list of test labs',
          display: 'Mars Testing',
        },
      ],
      category: [
        {
          coding: [
            {
              system: 'link to diseases retrieval',
              code: 'COVID',
              display: 'COVID-19',
            },
            {
              code: 'Yellow',
              display: 'Yellow Fever',
            },
          ],
        },
      ],
      result: [
        {
          reference: 'observation/positive',
        },
        {
          reference: 'observation/negative',
        },
      ],
    };
  }
}
