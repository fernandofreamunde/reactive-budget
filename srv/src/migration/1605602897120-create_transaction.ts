import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTransaction1605602897120 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'transaction',
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
          name: 'date',
          type: 'date',
        },
        {
          name: 'description',
          type: 'varchar'
        },
        {
          name: 'amount',
          type: 'float'
        },
        {
          name: 'createdAt',
          type: 'date'
        },
        {
          name: 'updatedAt',
          type: 'date'
        },
        {
          name: 'accountId',
          type: 'varchar',
        },
        {
          name: 'bankId',
          type: 'varchar',
        },
        {
          name: 'categoryId',
          type: 'varchar',
        },
      ],
      foreignKeys: [
        {
          name: 'transactionAccount',
          columnNames: ['accountId'],
          referencedTableName: 'account',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        {
          name: 'transactionCategory',
          columnNames: ['categoryId'],
          referencedTableName: 'category',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        {
          name: 'transactionBank',
          columnNames: ['bankId'],
          referencedTableName: 'bank',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transaction');
  }

}
