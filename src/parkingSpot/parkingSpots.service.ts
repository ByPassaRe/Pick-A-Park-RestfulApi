import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingSpot } from './parkingSpot.entity';

import { getDistance } from 'geolib';
import { GeolibInputCoordinates } from 'geolib/es/types';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ParkingSpotsService {
  constructor(
    @InjectRepository(ParkingSpot)
    private readonly parkingSpotRepository: Repository<ParkingSpot>,
  ) {}

  async findAll(): Promise<ParkingSpot[]> {
    return await this.parkingSpotRepository.find();
  }

  async findAllAvailable(): Promise<ParkingSpot[]> {
    return await this.parkingSpotRepository.find({presence: true});
  }

  async findOne(id: number): Promise<ParkingSpot> {
    return await this.parkingSpotRepository.findOne(id);
  }

  async create(parkingSpot: ParkingSpot): Promise<ParkingSpot> {
    return await this.parkingSpotRepository.save(parkingSpot);
  }

  async update(parkingSpot: ParkingSpot): Promise<UpdateResult> {
    return await this.parkingSpotRepository.update(parkingSpot.id, parkingSpot);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.parkingSpotRepository.delete(id);
  }

  async retrieveNearestParkingSpot(latitude, longitude) {

    const currentPosition: GeolibInputCoordinates = {
      latitude,
      longitude,
    };

    const parkingSpots = await this.findAllAvailable();

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
