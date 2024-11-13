import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todoReducer from './Redux/todoSlice';
import pokemonReducer from './Redux/pokemonSlice';
import appReducer from './Redux/appSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    pokemon: pokemonReducer,
    app: appReducer,
  },
});

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;