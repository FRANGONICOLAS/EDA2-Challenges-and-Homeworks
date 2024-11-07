import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './store/counterSlice';

export const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0);

  const handleIncrementByChange = (e) => {
    setIncrementValue(Number(e.target.value));
  };

  return (
    <>
      <h1>App</h1>
      <hr />
      <span>Counter is: {counter}</span>
      <div>
        <button
          className='btn btn-primary'
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className='btn btn-secondary'
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <input
          type="number"
          value={incrementValue}
          onChange={handleIncrementByChange}
        />
        <button
          className='btn btn-success'
          onClick={() => dispatch(incrementBy(incrementValue))}
        >
          Increment by {incrementValue}
        </button>
      </div>
    </>
  );
};