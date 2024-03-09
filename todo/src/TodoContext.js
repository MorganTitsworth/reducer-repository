import React, { createContext, useReducer, useContext, useEffect } from 'react';

const TodoContext = createContext();
//function that handles the actions. adding & removing
const todoReducer = (state, action) => {
  switch (action.type) {
    //add to do
    case 'addTodo':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
      //toggle to-do
    case 'toggleTodo':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      //delete to-do
    case 'deleteTodo':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  //store todos using the reducer
  const [todos, dispatch] = useReducer(todoReducer, [], initialTodos => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return initialTodos.concat(storedTodos);
  });
  //useEffect to save todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  //error message if context not found
  if (!context) {
    throw new Error('');
  }
  return context;
};

export { TodoProvider, useTodoContext };
