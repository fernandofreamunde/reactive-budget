import React from 'react';
import Logo from '../assets/logo.svg'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/landing.css'

function Landing() {
  return (
    <div id='Landing-page'>
      <img src={Logo} alt='Reactive Budget' />
      <div className="content-wrapper">
        <h1>Control Your Expenses by budgeting</h1>
        <p>See where you are spending your money, save more by understanding your expending habits.</p>
          <Link to='lists' className="next-page-button">
            <FiArrowRight size='26' color='#808080' />
          </Link>
      </div>
    </div>
  )
}

export default Landing;


// Notes:
// See CSS grid -> apply it to the #landing-page
// position the elements 