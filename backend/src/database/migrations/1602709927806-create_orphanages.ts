import { table } from "console";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602709927806 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // O MÉTODO UP REALIZA ALTERAÇÕES, ATUALIZAÇÕES, DELEÇÕES OU CRIAÇÕES NO BANCO.
    await queryRunner.createTable(new Table({ //deve-se importar inicialmente a 'Table'. 
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'

        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        },
      ]

    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // O MÉTODO DOWN FUNCIONA COMO SE FOSSE UM ROLLBACK DO MÉTODO UP.
    await queryRunner.dropTable('orphanages');
  }

}
