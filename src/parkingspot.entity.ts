import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ParkingSpot {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    status: boolean;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    isForHandicap: boolean;
}
