import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ParkingSpot } from './parkingspot.entity';
import { ParkingSpotsService } from './parkingspots.service';

@Crud({
  model: {
    type: ParkingSpot,
  },
})
@Controller('parkingspots')
export class ParkingSpotsController {
  constructor(public service: ParkingSpotsService) {}
}
