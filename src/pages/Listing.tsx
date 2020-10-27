import React, { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import '../styles/components/dataview.css';

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

  useEffect(() => {
    let ent = {
      id: 'someId',
      date: new Date(),
      description: 'this is a description',
      type: 'tyoe0',
      bank: 'mybanc',
      amount: 1234,
    }
    let ent2 = {
      id: 'someId2',
      date: new Date(),
      description: 'this is a description',
      type: 'tyoe1',
      bank: 'mybanc',
      amount: 1234,
    }
    let ent3 = {
      id: 'someId3',
      date: new Date(),
      description: 'this is a description',
      type: 'tyoe2',
      bank: 'mybanc',
      amount: 1234,
    }
    setTimeout(() => {
      setEntries([ent,ent2,ent3].reverse());
    }, 123);
  }, []);

  if (!entries) {
    return <h1>loading....</h1>
  }

  return (
    <div id='listings'>
      <Sidebar />

      <main id='dataView'>

      <div>
        <div className="entriesList">
          {entries.map(entry =>{
            return (
              <div key={entry.id} className="entry" >
                <span>{entry.date.getDay() +'-'+entry.date.getMonth() +'-'+entry.date.getFullYear()}</span>
                <span>{entry.description}</span>
                <span>{entry.type}</span>
                <span>{entry.bank}</span>
                <span>{entry.amount}</span>
              </div>
            );
          })}
        </div>

        <form className='entryForm'>
          <input type='text' name='date' value='' placeholder='01-01-2020' />
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