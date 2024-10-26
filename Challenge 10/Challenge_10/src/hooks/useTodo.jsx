import { useState } from 'react';

const useTODO = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter(todo => !todo.done).length;

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos
  };
};

export default useTODO;