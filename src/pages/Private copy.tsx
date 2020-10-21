import React from 'react';
import Logo from '../assets/logo.svg'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/landing.css'

function Private() {
  return (
    <div id='Landing-page'>
      <img src={Logo} alt='Reactive Budget' />
      <div className="content-wrapper">
        <h1>Your budget is private so we don’t share it</h1>
        <p>We strongly believe such sensitive information<br/>should never be shared so we keep it private.</p>
          <Link to='lists' className="next-page-button">
            <FiArrowRight size='26' color='#808080' />
          </Link>
      </div>
    </div>
  )
}

export default Private;


// Notes:
// See CSS grid -> apply it to the #landing-page
// position the elements 