import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ParkingSpot {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    presence: boolean;

    @Column('double')
    latitude: number;

    @Column('double')
    longitude: number;

    @Column()
    isForHandicap: boolean;
}
