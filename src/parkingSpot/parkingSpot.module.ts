import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParkingSpot } from '../entity/parkingSpot.entity';
import { ParkingSpotService } from './parkingSpot.service';
import { ParkingSpotController } from './parkingSpot.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingSpot])],
  providers: [ParkingSpotService],
  controllers: [ParkingSpotController],
})
export class ParkingSpotModule {}
