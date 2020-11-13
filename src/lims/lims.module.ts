import { Module } from '@nestjs/common';
import { LIMSClient } from './lims.client';
import { LIMSService } from './lims.service';

@Module({
  providers: [LIMSService, LIMSClient],
  exports: [LIMSService]
})
export class LIMSModule {}
