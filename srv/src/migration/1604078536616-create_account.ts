import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAccount1604078536616 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'account',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isUnique: true,
          isGenerated: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'createdAt',
          type: 'varchar',
        },
        {
          name: 'updatedAt',
          type: 'varchar',
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('account');
  }

}
