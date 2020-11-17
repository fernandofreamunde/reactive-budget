import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategory1605564159499 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'category',
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
          name: 'categoryAccount',
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
    await queryRunner.dropTable('category');
  }

}
