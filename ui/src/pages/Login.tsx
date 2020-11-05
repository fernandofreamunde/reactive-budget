import React from 'react';
import HeaderBar from '../components/HeaderBar';
import LoginForm from '../components/LoginForm';
import PageContent from '../components/PageContent';

export default function Login() {

  const left = (
    <div>
      <h1>Welcome back<br />please login.</h1>
      <p>Use your chosen email and password to login.<br />We work eveyday to make your experience better.</p>
    </div>
  )

  const form = (
    <LoginForm />
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
