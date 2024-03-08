import React from 'react';
//Imports React to be able to use React components
import Counter from './Counter';
//Imports Counter to display the UI for the User
import { CounterProvider } from './CounterContext';
//Imports CounterProvider to give the state and dispatch function to its children.

const App = () => {
  //Defines the functional App component
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
//Wraps Counter within CounterProvider making the state and dispatch from CounterProvider available to Counter 
};

export default App;