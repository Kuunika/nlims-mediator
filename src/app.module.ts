import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule, WinstonModuleOptions } from 'nest-winston';
import { transports as Transports, format as Format } from 'winston';
import { PatientsModule } from './patients/patients.module';
import { LIMSModule } from './lims/lims.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: function (service: ConfigService): WinstonModuleOptions {
        let transports: Array<Transports.ConsoleTransportInstance | Transports.FileTransportInstance> = [];
        if (service.get<string>('NODE_ENV') !== 'production') {
          transports = [new Transports.Console({ format: Format.simple() })];
        } else {
          transports = [
            new Transports.File({ filename: 'logs/error.log', level: 'error' }),
            new Transports.File({ filename: 'logs/combined.log' })
          ];
        }
        return {
          level: 'info',
          format: Format.json(),
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
