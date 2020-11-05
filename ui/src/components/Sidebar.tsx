import React from 'react';
import Logo from '../assets/Reactive.svg';
import LogoText from '../assets/ReactiveBudget.svg';
import '../styles/components/sidebar.css';

export default function Sidebar() {
  return(
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
  );
}