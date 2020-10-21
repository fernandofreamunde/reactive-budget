import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pricing.css'
import HeaderBar from '../components/HeaderBar';

function Pricing() {
  return (
    <div id='Pricing-page'>
      <HeaderBar />
      <div className="content-wrapper">
        <div>
        <h1>On top of that, is super affordable!</h1>
        <p>A simple aplication with a simple pricing plan.<br/>5 euros per month! 20% discount if you pay yearly.</p>
        </div>
        <div className="product-description">
          <h3>Features</h3>
          <ul>
            <li>Insert your expenses and income</li>
            <li>Check your monthly reports</li>
            <li>Have more insights with beautiful Graphs</li>
            <li>more to come :)</li>
          </ul>
          <h3>Price</h3>
          <ul>
            <li>5 euros monthly</li>
            <li>50 euros yearly</li>
          </ul>
        </div>
          <Link to='lists' className="next-page-button">
            <FiArrowRight size='26' color='#808080' />
          </Link>
      </div>
    </div>
  )
}

export default Pricing;


// Notes:
// See CSS grid -> apply it to the #landing-page
// position the elements 