import { Controller } from '@nestjs/common';
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
}
