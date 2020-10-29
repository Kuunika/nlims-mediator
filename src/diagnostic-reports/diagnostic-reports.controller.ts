import { Controller, Get } from '@nestjs/common';

@Controller('diagnostic-reports')
export class DiagnosticReportsController {
  @Get('')
  async function() {
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
}
