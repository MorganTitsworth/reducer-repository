import React from 'react';
import './App.css';
import { TodoProvider } from './TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo Tracker</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
