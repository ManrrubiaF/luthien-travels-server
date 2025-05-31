import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class comments {
    @PrimaryGeneratedColumn()
    id:number;
    @Column('text')
    name:string;
    @Column('text')
    text: string;
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}