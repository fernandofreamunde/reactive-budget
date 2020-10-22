import React, { FormEvent, useState } from 'react';

export default function RegistrationForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleSubmit(event:FormEvent) {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert('passwords do not match');
      return;
    }

    console.log({
      email,
      password
    });
  }

  return (
    <div id='Registration-form'>
      <form onSubmit={handleSubmit} className="register-user">
        <label htmlFor='email'>email:</label>
        <input 
          name='email' 
          type='email' 
          required placeholder='yourname@example.com' 
          onChange={event => setEmail(event.target.value)} 
          value={email} 
        />
        <label htmlFor='password'>password:</label>
        <input 
          name='password' 
          type='password' 
          required 
          placeholder='top secret' 
          value={password} 
          onChange={event => setPassword(event.target.value)}
        />
        <input 
          name='passwordConfirmP' 
          type='password' 
          required 
          placeholder='top secret' 
          value={passwordConfirm} 
          onChange={event => setPasswordConfirm(event.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  )
}