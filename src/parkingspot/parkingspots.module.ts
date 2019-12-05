import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParkingSpot } from './parkingspot.entity';
import { ParkingSpotsService } from './parkingspots.service';
import { ParkingSpotsController } from './parkingspots.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingSpot])],
  providers: [ParkingSpotsService],
  controllers: [ParkingSpotsController],
})
export class ParkingSpotsModule {}
