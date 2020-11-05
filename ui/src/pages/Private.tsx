import React from 'react';

import '../styles/landing.css'
import HeaderBar from '../components/HeaderBar';
import PageContent from '../components/PageContent';

function Private() {
  const left = (
    <div>
      <h1>Your budget is private so we don’t share it</h1>
      <p>We strongly believe such sensitive information<br/>should never be shared so we keep it private.</p>
    </div>
  )
  return (
    <div id='Landing-page'>
      <HeaderBar />
      <PageContent
        leftSide={left}
        linkTarget='pricing'
      />
    </div>
  )
}

export default Private;
