import React from 'react';
import Logo from '../assets/logo.svg'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/landing.css'

function Home2() {
  return (
    <div id='Landing-page'>
      <img src={Logo} alt='Reactive Budget' />
      <div className="content-wrapper">
        <h1>With an elegant interface</h1>
        <p>Budgeting was never this simple and pleasurable. See how much you spent and plan your next month.</p>
          <Link to='private' className="next-page-button">
            <FiArrowRight size='26' color='#808080' />
          </Link>
      </div>
    </div>
  )
}

export default Home2;


// Notes:
// See CSS grid -> apply it to the #landing-page
// position the elements 