// TodoList.js
import React from 'react';
import { useTodoContext } from './TodoContext';
import { Pencil, Trash, Check } from 'lucide-react';

const TodoList = () => {
  const { todos, dispatch } = useTodoContext();

  const handleToggleTodo = (id) => {
    dispatch({ type: 'toggleTodo', payload: id });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'deleteTodo', payload: id });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <button className="delete-btn" onClick={() => removeTodo(todo.id)}><Trash /></button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
