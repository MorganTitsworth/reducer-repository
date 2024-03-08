import React, { useEffect } from 'react';
//Importing useEffect from React
import { useCounter } from './CounterContext';
//Importing useCounter from CounterContext.js
import './Counter.css';
//Importing stylization from Counter.css

const Counter = () => {
//Defining the functioning Component as Counter
const { state, dispatch } = useCounter();
const { count } = state;
//uses useCounter to reach state and dispatch that is given by CounterProvider in CounterContext.js.
//further takes count from state to represent the current count value

useEffect(() => {
    document.title = `Count: ${count}`;
}, [count]);
//useEffect updates the Count: title with the current "count" value dynamically
//runs when "count" changes in relation to the [count] array

return (
    <div className="counter-container">
    <div className="counter-box">
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
    </div>
//Renders
);
};

export default Counter;
//Makes the entire Counter component available for import amongst the other files that might need access to it.