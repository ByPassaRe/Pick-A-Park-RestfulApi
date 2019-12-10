import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert} from 'typeorm';
import * as argon2 from 'argon2';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({
        default: 0,
    })
    balance: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @BeforeInsert()
    async hashPassword() {
        const hash = await argon2.hash(this.password);
        this.password = hash;
    }

}
