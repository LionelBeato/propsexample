import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fruit from './Fruit';

function App() {
  return (
    <div>
      <Fruit name="orange" color="orange" type="citrus" />
      <Fruit name="granny-smith" color="green" type="apple" />
    </div>
  );
}

export default App;
