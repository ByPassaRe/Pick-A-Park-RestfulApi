import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ParkingSpot } from './parkingspot.entity';

@Injectable()
export class ParkingSpotsService extends TypeOrmCrudService<ParkingSpot> {
  constructor(@InjectRepository(ParkingSpot) repo) {
    super(repo);
  }
}
