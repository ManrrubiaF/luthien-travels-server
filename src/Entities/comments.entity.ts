import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class comments {
    @PrimaryGeneratedColumn()
    id:number;
    @Column('text')
    name:string;
    @Column('text')
    text: string;
}