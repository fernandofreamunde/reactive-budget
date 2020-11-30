import React, { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import NumberFormat from 'react-number-format';
import Sidebar from '../components/Sidebar';
import BankResource from '../resources/BankResource';
import CategoryResource from '../resources/CategoryResource';
import TransactionResource from '../resources/TransactionResource';
import '../styles/components/dataview.css';
import { useHistory } from 'react-router-dom';

interface Entry {
  id: string,
  date: Date,
  description: String,
  type: String,
  bank: String,
  amount: number,
}

function Listing() {
  const [entries, setEntries] = useState<Entry[]>();
  const [banks, setBanks] = useState<BankResource[]>([]);
  const [categories, setCategories] = useState<CategoryResource[]>([]);
  const [transactions, setTransactions] = useState<TransactionResource[]>([]);
  const history = useHistory();

  useEffect(() => {
    const bank = new BankResource();
    bank.list().then(response => {
      setBanks(response);
    }).catch(() => {
      history.push('login');
    });

    const category = new CategoryResource();
    category.list().then(response => {
      setCategories(response);
    });

    const transaction = new TransactionResource();
    transaction.list().then(response => {
      setTransactions(response);
    });
  }, []);

  if (!transactions) {
    return <h1>loading....</h1>
  }

  return (
    <div id='listings'>
      <Sidebar />

      <main id='dataView'>

      <div>
        <div className="entriesList">
          {transactions.map(entry =>{
            return (
              <div key={entry.getId()} className="entry" >
                <span>{new Date(entry.getDate()).toLocaleDateString('pt')}</span>
                <span>{entry.getDescription()}</span>
                <span>{ categories.filter((category:CategoryResource) => { return category.getId() === entry.getCategory()})[0].getName() }</span>
                <span>{ banks.filter((bank:BankResource) => { return bank.getId() === entry.getBank()})[0].getShortName() }</span>
                <span> <NumberFormat 
                 value={entry.getAmount()}
                 isNumericString
                 decimalScale={2}
                 fixedDecimalScale
                 displayType={"text"}
                 thousandSeparator={true}
                 suffix={" $"}
                /></span>
              </div>
            );
          })}
        </div>

        <form className='entryForm'>
          <input type='text' name='date' value='' placeholder='01/01/2020' />
          <input type='text' name='description' value='' placeholder='supermarket' />
          <input type='text' name='type' value='' placeholder='groceries' />
          <input type='text' name='bank' value='' placeholder='ABN' />
          <input type='text' name='amount' value='' placeholder='15.00 $' />
          <div className="buttonBox">
            <button id='income' className='inactive'><FiPlus size='26' /></button>
            <button id='expense'><FiMinus size='26' /></button>
          </div>
        </form>

        <div className='statusReport'>
          <span >Expenses: <span className='expense' >123</span></span>
          <span >Income: <span className='income' >123</span></span>
          <span>Balance: 123</span>
        </div>
        </div>
      </main>
    </div>
  )
}

// add styles

export default Listing