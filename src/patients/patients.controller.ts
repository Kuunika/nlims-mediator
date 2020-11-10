import { Controller, Get } from '@nestjs/common';
import { IPatient } from './interfaces/patient.interface';

@Controller('patients')
export class PatientsController {
  @Get('')
  async patients(): Promise<Array<IPatient>> {
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
  @Get(':id')
  async patient(): Promise<IPatient> {
    return {
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
    };
  }
}
