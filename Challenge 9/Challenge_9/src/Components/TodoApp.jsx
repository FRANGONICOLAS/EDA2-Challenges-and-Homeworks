import { React } from 'react';
import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';

import TodoList from './TodoList'; // Importa el componente TodoList
import TodoItem from './TodoItem'; // Importa el componente TodoItem
import TodoAdd from './TodoAdd'; // Importa el componente TodoAdd

const initialState = [{
  id: new Date().getTime(),
  description: 'Hacer los challenges',
  done: false
}];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  return (
    <>
      <h1>TodoApp: {todos.length}, <small> Pendientes: {todos.filter(todo => !todo.done).length} </small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} /> // Pasa el estado de los todos al componente TodoList
        </div>

        <div className="col-5">
          <h4> Agregar TODO </h4>
          <hr />
          <TodoAdd onNewTodo={dispatchTodo} /> // Pasa la función dispatchTodo al componente TodoAdd
        </div>
      </div>
    </>
  );
};