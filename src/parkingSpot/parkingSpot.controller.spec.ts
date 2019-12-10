import { Test } from '@nestjs/testing';
import { ParkingSpotsController } from './parkingSpots.controller';
import { ParkingSpotsService } from './parkingSpots.service';
import { ParkingSpot } from './parkingSpot.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('CatsController', () => {
  let parkingSpotsController: ParkingSpotsController;
  let parkingSpotsService: ParkingSpotsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
        controllers: [ParkingSpotsController],
        providers: [
            ParkingSpotsService,
            {
                provide: getRepositoryToken(ParkingSpot),
                useClass: Repository,
            },
        ],
      }).compile();

    parkingSpotsService = module.get<ParkingSpotsService>(ParkingSpotsService);
    parkingSpotsController = module.get<ParkingSpotsController>(ParkingSpotsController);
  });

  it('should return the nearest parking spot', async () => {
      const parkingSpots: ParkingSpot[] = [
          {
              id: '1',
              isForHandicap: false,
              latitude: 31.11,
              longitude: 45.1231,
              status: false,
          },
          {
            id: '2',
            isForHandicap: false,
            latitude: 0.45001,
            longitude: 0.900,
            status: false,
          },
          {
            id: '3',
            isForHandicap: false,
            latitude: 31.11,
            longitude: 45.1231,
            status: false,
          },
      ];

      jest.spyOn(parkingSpotsService, 'findAll').mockImplementation(async () => parkingSpots);

      const nearest = await parkingSpotsController.getNearestParkingSpot(0.001, 0.222);

      expect(nearest.parkingSpot.id).toBe('2');
  });
});
