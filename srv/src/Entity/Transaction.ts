import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Account from "./Account";
import Bank from "./Bank";
import Category from "./Category";

@Entity()
export default class Transaction {
  //{ id, date, description, category, bank, amount, user, createdAt, updatedAt }
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ManyToOne(() => Bank)
  @JoinColumn({ name: 'bankId' })
  bank: Bank;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'accountId' })
  account: Account;
}
