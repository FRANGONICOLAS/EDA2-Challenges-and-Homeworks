import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from './hooks/useForm';
import { registerAuth } from './store/slices/auth/thunks';

export const Registro = () => {
  const dispatch = useDispatch();

  const [
    { email, password },
    onInputChange,
    formState,
  ] = useForm({
    email: 'jlopez0313@gmail.com',
    password: '123456',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    dispatch(registerAuth(email, password));
  };

  return (
    <div>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          name="email" type="email" onChange={(event) => onInputChange(event)} value={email}
        />
        <input
          name="password" type="password" onChange={(event) => onInputChange(event)} value={password}
        />
        <button type="submit">Registro</button>
      </form>
    </div>
  );
};