import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBank1604559980789 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'bank',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isUnique: true,
          isGenerated: true,
          isNullable: false,
          generationStrategy: 'uuid',
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'shortName',
          type: 'varchar'
        },
        {
          name: 'createdAt',
          type: 'varchar',
        },
        {
          name: 'updatedAt',
          type: 'varchar',
        },
        {
          name: 'accountId',
          type: 'varchar',
        },
      ],
      foreignKeys: [
        {
          name: 'bankAccount',
          columnNames: ['accountId'],
          referencedTableName: 'account',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bank');
  }

}
