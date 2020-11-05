import React from 'react';
import HeaderBar from '../components/HeaderBar';
import PageContent from '../components/PageContent';

function Landing() {
  const left = (
    <div>
      <h1>Control Your Expenses by budgeting</h1>
      <p>See where you are spending your money, save more by understanding your expending habits.</p>
    </div>
  )

  return (
    <div id='Landing-page'>
      <HeaderBar />
      <PageContent
        leftSide={left}
        linkTarget='home2'
      />
    </div>
  )
}

export default Landing;
