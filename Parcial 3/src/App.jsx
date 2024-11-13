import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TodoApp from './Components/Todo/TodoApp';
import PokemonApp from './Components/Pokemon/PokemonApp';
import StoreProvider from './store';
import './App.css';

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/Pokemon" element={<PokemonApp />} />
            <Route path="/TodoApp" element={<TodoApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;