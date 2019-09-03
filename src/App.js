import React from 'react';
import Generator from './generator';
import './App.css';
import { maxLength, asyncTeste, minLength } from './generator/Validators';
import { fieldTypeEnum } from './generator/fieldTypeEnum';

const configs = [
  {
    name: 'nome',
    field: { type: fieldTypeEnum.INPUT },
    props: { placeholder: 'oi' },
    validators: [[maxLength(5), minLength(2)], [asyncTeste]]
  },
  {
    name: 'email',
    field: {
      type: fieldTypeEnum.SELECT,
      options: [
        { value: '1', label: 'Opção 1' },
        { value: '2', label: 'Opção 2' }
      ]
    },
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
