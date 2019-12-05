import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ParkingSpot } from '../entity/parkingSpot.entity';
import { ParkingSpotService } from './parkingSpot.service';

@Crud({
  model: {
    type: ParkingSpot,
  },
})
@Controller('parkingspots')
export class ParkingSpotController {
  constructor(public service: ParkingSpotService) {}
}
