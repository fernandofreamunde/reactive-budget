import React, { useState } from 'react';
import '../styles/components/autocomplete.css';

interface countryList {
  countries: Array<string>
}

export default function Autocomplete(props:countryList) {

  const [input, setInput] = useState('');
  const [result, setResult] = useState<string[]>([]);
  const countries = props.countries;

  
  function handleChange(newInput:string) {
    setInput(newInput);
    if (newInput === '') {
      setResult([]);
      return;
    }

    let asd = countries.filter( (element) => {
      return element.toLowerCase().includes(newInput.toLowerCase());
    });

    if (asd.length === 0) {
      setResult([]);
      return;
    }

    if (asd.length === 1 && asd[0] === newInput) {
      setResult([]);
      return;
    }
    
    setResult(asd);
  }

  return (
    <div id='Autocomplete' >
      <input type='text' name='autocomplete' autoComplete='off' placeholder='search' value={input} onChange={event => handleChange(event.target.value)} />
      <div className='wrapper' >
      {result.map( (text, index) => {
        return <div className='suggestion' key={index} onClick={() => handleChange(text)}>{text}</div>
      })}
      </div>
    </div>
  );
}