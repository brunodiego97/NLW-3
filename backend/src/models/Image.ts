import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanages';

@Entity('images') // relaciona a classe, com a tabela do banco
export default class Image {

    @PrimaryGeneratedColumn('increment') // define o tipo de column e o (tipo de cada gerado nesta coluna)
    id: number;

    @Column() // define que o elemento abaixo é uma coluna
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;
}