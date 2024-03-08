import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';
import {Plus} from "lucide-react";

const TodoForm = () => {
  const { dispatch } = useTodoContext();
  const [text, setText] = useState('');

  //handle adding todos
  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'addTodo', payload: text });
      setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button className= "add-btn" onClick={handleAddTodo}><Plus/></button>
    </div>
  );
};

export default TodoForm;
