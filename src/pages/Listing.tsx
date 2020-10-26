import React, { useEffect, useState } from 'react';
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
    <div>
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

      <main>
        {entries.map(entry =>{
          return (<h6>entry</h6>)
        })}
      </main>
    </div>
  )
}

// add styles

export default Listing