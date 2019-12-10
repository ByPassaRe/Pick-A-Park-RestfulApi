import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ParkingSpot } from './parkingSpot.entity';

import { getDistance } from 'geolib';
import { GeolibInputCoordinates } from 'geolib/es/types';

@Injectable()
export class ParkingSpotsService extends TypeOrmCrudService<ParkingSpot> {
  constructor(@InjectRepository(ParkingSpot) repo) {
    super(repo);
  }

  async retrieveNearestParkingSpot() {

    const currentPosition: GeolibInputCoordinates = {
      latitude: 0.0,
      longitude: 0.0,
    };

    const parkingSpots = await this.repo.find();

    const nearestParkingSpot = parkingSpots.map( parkingSpot => {

      const parkingSpotLocation: GeolibInputCoordinates = {
        latitude: parkingSpot.latitude,
        longitude: parkingSpot.longitude,
      };

      const distance = getDistance(currentPosition, parkingSpotLocation);

      return { distance, parkingSpot };

    }).reduce( (nearest, current) => nearest.distance < current.distance ? nearest : current);

    return nearestParkingSpot;
  }
}
