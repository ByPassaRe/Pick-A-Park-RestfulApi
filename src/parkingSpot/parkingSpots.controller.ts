import { Controller, Get, Query } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ParkingSpot } from './parkingSpot.entity';
import { ParkingSpotsService } from './parkingSpots.service';

@Crud({
  model: {
    type: ParkingSpot,
  },
})
@Controller('parkingSpots')
export class ParkingSpotsController {
  constructor(public service: ParkingSpotsService) {}

  @Get('nearest')
  getNearestParkingSpot(@Query('latitude') latitude: number, @Query('longitude') longitude: number) {
    return this.service.retrieveNearestParkingSpot(latitude, longitude);
  }
}
