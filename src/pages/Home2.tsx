import React from 'react';
import HeaderBar from '../components/HeaderBar';
import PageContent from '../components/PageContent';

function Home2() {
  const left = (
    <div>
      <h1>With an elegant interface</h1>
      <p>Budgeting was never this simple and pleasurable. See how much you spent and plan your next month.</p>
    </div>
  )
  return (
    <div id='Landing-page'>
      <HeaderBar />
      <PageContent
        leftSide={left}
        linkTarget='private'
      />
    </div>
  )
}

export default Home2;
