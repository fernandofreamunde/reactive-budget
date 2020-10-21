import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import '../styles/heading.css';

export default function HeaderBar() {
  return (
    <div id="HeaderBar">
      <img src={Logo} alt='Reactive Budget' />
      <nav>
        <ul>
          <li>
            <Link to='registration' className="button" >Registration</Link>
          </li>
          <li>
            <Link to='login' className="button" >Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}