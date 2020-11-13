import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PatientsModule } from './patients/patients.module';
import LIMSConfig from './config';
import { LIMSModule } from './lims/lims.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [LIMSConfig], isGlobal: true }),
    PatientsModule,
    LIMSModule
  ]
})
export class AppModule {}
