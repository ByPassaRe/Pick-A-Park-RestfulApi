import { Controller, Get, Post, Put, Delete, Query, Body, Param } from '@nestjs/common';
import { ParkingSpot } from './parkingSpot.entity';
import { ParkingSpotsService } from './parkingSpots.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('parkingSpots')
export class ParkingSpotsController {
  constructor(public parkingSpotsService: ParkingSpotsService) {}

  @Get()
  findAll(): Promise<ParkingSpot[]> {
    return this.parkingSpotsService.findAll();
  }

  @Post()
  create(@Body() parkingSpotData: ParkingSpot): Promise<ParkingSpot> {
    return this.parkingSpotsService.create(parkingSpotData);
  }

  @Put()
  update(@Body() parkingSpotData: ParkingSpot): Promise<UpdateResult> {
    return this.parkingSpotsService.update(parkingSpotData);
  }

  @Get('nearest')
  getNearestParkingSpot(@Query('latitude') latitude: number, @Query('longitude') longitude: number) {
    return this.parkingSpotsService.retrieveNearestParkingSpot(latitude, longitude);
  }

  @Get(':id')
  find(@Param('id') id): Promise<ParkingSpot> {
    return this.parkingSpotsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<DeleteResult> {
    return this.parkingSpotsService.delete(id);
  }

  @Post(':id/presence/:status')
  setPresence(@Param('id') id, @Param('status') status): Promise<UpdateResult> {
    return this.parkingSpotsService.setPresence(id, status);
  }
}
