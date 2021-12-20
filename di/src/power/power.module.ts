import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // TO ALLOW OTHER MODULES TO USE POWER MODULE
})
export class PowerModule { }
