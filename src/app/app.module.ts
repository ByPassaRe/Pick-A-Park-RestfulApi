import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingSpotsModule } from '../parkingSpot/parkingSpots.module';
import { UsersModule } from '../user/user.module';
import { ParkingSpot } from '../parkingSpot/parkingSpot.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      // Entities
      entities: [
        ParkingSpot,
        User,
      ],
      synchronize: true,
    }),
    // Modules
    ParkingSpotsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
