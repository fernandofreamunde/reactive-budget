import React from 'react';
import HeaderBar from '../components/HeaderBar';
import PageContent from '../components/PageContent';
import '../styles/pricing.css'

function Pricing() {
  const left = (
    <div>
      <h1>On top of that, is super affordable!</h1>
      <p>A simple aplication with a simple pricing plan.<br/>5 euros per month! 20% discount if you pay yearly.</p>
    </div>
  )
  const right = (
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
  )
  return (
    <div id='Pricing-page'>
      <HeaderBar />
      <PageContent
        leftSide={left}
        rightSide={right}
        linkTarget='login'
      />
    </div>
  )
}

export default Pricing;
