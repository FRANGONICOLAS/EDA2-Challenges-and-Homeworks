import { useState } from 'react';

const useCounter = (initialState = 1) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1); // Usamos la función de actualización
    console.log(counter);
  };

  return {
    counter,
    increment,
  };
};

export { useCounter };
