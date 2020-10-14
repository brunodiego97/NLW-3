import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages') // relaciona a classe, com a tabela do banco
export default class Orphanage {

    @PrimaryGeneratedColumn('increment') // define o tipo de column e o (tipo de cada gerado nesta coluna)
    id: number;

    @Column() // define que o elemento abaixo é uma coluna
    name: string;

    @Column() // caso o dado abaixo não for uma coluna, basta retirar o @Column
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;
}