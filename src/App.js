import React from 'react';
import Generator from './generator';
import './App.css';
import { maxLength, asyncTeste } from './generator/Validators';

const configs = [
  {
    name: 'nome',
    field: <input />,
    props: { placeholder: 'oi' },
    validators: [[maxLength(5)], [asyncTeste]]
  }
];

function App() {
  const submit = value => {
    console.log(value);
  };

  return (
    <div className="App">
      <Generator
        buttonName="entrar"
        configs={configs}
        onSubmit={submit}
      ></Generator>
    </div>
  );
}

export default App;
