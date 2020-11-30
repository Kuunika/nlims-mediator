import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule, WinstonModuleOptions } from 'nest-winston';
import { transports as Transports } from 'winston';
import { PatientsModule } from './patients/patients.module';
import { LIMSModule } from './lims/lims.module';
import { defaultLogFormat } from './utils/os';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: function (service: ConfigService): WinstonModuleOptions {
        const transports: Array<Transports.ConsoleTransportInstance | Transports.FileTransportInstance> = [
            new Transports.File({ filename: 'logs/error.log', level: 'error', format: defaultLogFormat() }),
            new Transports.File({ filename: 'logs/combined.log', format: defaultLogFormat() })
        ];
        if (service.get<string>('NODE_ENV') !== 'production') {
          transports.push(new Transports.Console({ format: defaultLogFormat() }));
        }
        return {
          level: 'info',
          format: defaultLogFormat(),
          defaultMeta: { service: 'NLMIS Mediator' },
          transports: transports
        }
      },
      inject: [ConfigService]
    }),
    PatientsModule,
    LIMSModule
  ]
})
export class AppModule { }
