import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParkingSpot } from './parkingSpot.entity';
import { ParkingSpotsService } from './parkingSpots.service';
import { ParkingSpotsController } from './parkingSpots.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingSpot])],
  providers: [ParkingSpotsService],
  controllers: [ParkingSpotsController],
})
export class ParkingSpotsModule {}
