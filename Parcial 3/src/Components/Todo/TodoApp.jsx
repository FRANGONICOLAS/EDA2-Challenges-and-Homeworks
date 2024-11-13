import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../../Redux/todoSlice';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import '../../assets/TodoApp.css';

const TodoApp = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo-app">
      <h1>TodoApp: {todos.length}, <small> Pendientes: {todos.filter(todo => !todo.done).length} </small> </h1>
      <hr />
      <div className="container">
        <div className="todo-list">
          <TodoList todos={todos} onToggleTodo={handleToggleTodo} onRemoveTodo={handleRemoveTodo} />
        </div>
        <div className="todo-add">
          <h4> Agregar TODO </h4>
          <hr />
          <TodoAdd onNewTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;