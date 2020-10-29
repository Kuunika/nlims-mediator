import { Controller, Get } from '@nestjs/common';

@Controller('patients')
export class PatientsController {
  @Get('')
  async function() {
    return [
      {
        resourceType: 'Patient',
        name: [
          {
            use: 'official',
            given: ['John'],
            family: 'Doe',
          },
        ],
        telecom: [
          {
            system: 'email',
            value: 'john@doe.com',
          },
          {
            system: 'phone',
            use: 'mobile',
            value: '+265888834657',
          },
        ],
        address: [
          {
            country: 'Malawi',
          },
        ],
        identifier: [
          {
            use: 'official',
            value: 'MBX09499',
          },
        ],
      },
    ];
  }
}
