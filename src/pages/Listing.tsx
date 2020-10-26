import React, { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Logo from '../assets/Reactive.svg';
import LogoText from '../assets/ReactiveBudget.svg';
import '../styles/components/sidebar.css';

interface Entry {
  id: String,
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
      type: 'tyoe',
      bank: 'mybanc',
      amount: 1234,
    }
    setTimeout(() => {
      setEntries([ent,ent]);
    }, 123);
  }, []);

  if (!entries) {
    return <h1>loading....</h1>
  }

  return (
    <div id='listings'>
      <aside id='sidebar'>
        <img src={Logo} alt='Reactive Budget' />
        <nav>
          <ul>
            <li>
              <p className='menuTitle'>Select a view</p>
            </li>
            <li>
              <a href='#' className='menuButton'>Main</a>
            </li>
            <li>
              <a href='#' className='menuButton'>Monthly</a>
            </li>
          </ul>
        </nav>
        <img className='bottomImage' src={LogoText} alt='Reactive Budget' />
      </aside>

      <main id='dataView'>
        <div className="entriesList">
          {entries.map(entry =>{
            return (<h6>entry</h6>)
          })}
        </div>

        <form className='entryForm'>
          <input type='text' name='date' value='' placeholder='01-01-2020' />
          <input type='text' name='description' value='' placeholder='supermarket' />
          <input type='text' name='type' value='' placeholder='groceries' />
          <input type='text' name='bank' value='' placeholder='ABN' />
          <input type='text' name='value' value='' placeholder='15.00 $' />
          <button id='insertIncome' className='inactive'><FiPlus size='26' /></button>
          <button id='insertExpense'><FiMinus size='26' /></button>
        </form>

        <div className='statusReport'>
          <p>Expenses:</p>
          <p></p>
          <p>Income:</p>
          <p></p>
          <p>Balance</p>
          <p></p>
        </div>
      </main>
    </div>
  )
}

// add styles

export default Listing