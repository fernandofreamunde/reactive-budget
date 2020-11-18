import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();

    console.log({
      email,
      password
    });

    const response = await api.post('account/login', {email, password});
    console.log(response.data.token);
    //alert('Registred Sucessfully, you can login now.');
    return;
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
        <input type='submit' />
      </form>
    </div>
  )
}