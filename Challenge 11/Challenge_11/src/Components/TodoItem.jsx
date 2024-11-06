import Button from 'react-bootstrap/Button';
import React from 'react';
import '../assets/TodoItem.css'; // Corrige la ruta aquí

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="todo-item">
      <span
        className={todo.done ? 'done' : ''}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <Button onClick={() => onDelete(todo.id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;