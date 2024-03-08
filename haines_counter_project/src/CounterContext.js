import React, { createContext, useContext, useReducer } from 'react';
//Importing hooks from React
const CounterContext = createContext();
//Creates CounterContext by using the createContext function.  This now allows CounterContext to share state between other components.
export const CounterProvider = ({ children }) => {
//Becomes exportable so it can be used by other components.  The children prop is defined for the children components that will be used by CounterProvider    
const initialState = { count: 0 };
//Defines the start of the counter to 0
const reducer = (state, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return { count: state.count + 1 };
    case 'DECREMENT':
        return { count: state.count - 1 };
    default:
        return state;
    }
//This reducer updates state based on the dispatch.  Based on the current state and action, it will return the updated state.
};
const [state, dispatch] = useReducer(reducer, initialState);
//Takes the reducer function and the initialState object and returns the current state and dispatch.
return (
    <CounterContext.Provider value={{ state, dispatch }}>
    {children}
    </CounterContext.Provider>
);
//This component wraps the children prop with CounterContext to give state and dispatch to all other lower components.  
};

export const useCounter = () => useContext(CounterContext);
//defines useCounter as a personalized hook that is exportable to other components so that they can access counter state and dispatch function from  context.