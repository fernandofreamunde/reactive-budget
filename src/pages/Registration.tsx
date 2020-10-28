import React from 'react';
import HeaderBar from '../components/HeaderBar';
import PageContent from '../components/PageContent';
import RegistrationForm from '../components/RegistrationForm';

export default function Registration() {

  const left = (
    <div>
      <h1>Ready to start?<br />Register.</h1>
      <p>Please choose your credentials.<br />We’ll send you an email with the next steps.</p>
    </div>
  )

  const form = (
    <RegistrationForm />
  )

  return (
    <div id='Landing-page'>
      <HeaderBar />
      <PageContent
        leftSide={left}
        rightSide={form}
      />
    </div>
  )
}
