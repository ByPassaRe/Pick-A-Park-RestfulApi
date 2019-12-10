import { Controller, Get, Post, Put, Delete, Query, Body, Param } from '@nestjs/common';
import { ParkingSpot } from './parkingSpot.entity';
import { ParkingSpotsService } from './parkingSpots.service';
import { DeleteResult } from 'typeorm';

@Controller('parkingSpots')
export class ParkingSpotsController {
  constructor(public parkingSpotsService: ParkingSpotsService) {}

  @Get('nearest')
  getNearestParkingSpot(@Query('latitude') latitude: number, @Query('longitude') longitude: number) {
    return this.parkingSpotsService.retrieveNearestParkingSpot(latitude, longitude);
  }

  @Get()
  findAll(): Promise<ParkingSpot[]> {
    return this.parkingSpotsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id): Promise<ParkingSpot> {
    return this.parkingSpotsService.findOne(id);
  }

  @Post()
  create(@Body() parkingSpotData: ParkingSpot): Promise<ParkingSpot> {
    return this.parkingSpotsService.create(parkingSpotData);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<DeleteResult> {
    return this.parkingSpotsService.delete(id);
  }
}
