import React from 'react';
import useTODO from '../hooks/useTodo';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos } = useTODO();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.todo.value;
    if (newTodo) {
      addTodo(newTodo);
      event.target.reset();
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="todo" placeholder="Tarea" className="form-control" />
        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
      </form>
      <div>
        <h2>Total Todos: {countTodos()}</h2>
        <h2>Pending Todos: {countPendingTodos()}</h2>
      </div>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggle={toggleTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;