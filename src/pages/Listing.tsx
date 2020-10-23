import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';

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
      <aside className='sidebar'>
        <img src={Logo} alt='Reactive Budget' />
        <nav>
          <ul>
            <li>
              <a href='#'>Main</a>
            </li>
            <li>
              <a href='#'>Monthly</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        {entries.map((entry, index) =>{
          return (<h6>entry</h6>)
        })}
      </main>
    </div>
  )
}

// add styles

export default Listing