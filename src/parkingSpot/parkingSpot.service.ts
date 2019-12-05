import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ParkingSpot } from '../entity/parkingSpot.entity';

@Injectable()
export class ParkingSpotService extends TypeOrmCrudService<ParkingSpot> {
  constructor(@InjectRepository(ParkingSpot) repo) {
    super(repo);
  }
}
