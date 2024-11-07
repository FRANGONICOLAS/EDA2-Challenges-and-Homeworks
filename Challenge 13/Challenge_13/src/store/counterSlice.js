import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementBy: (state, action) => state + action.payload,
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;