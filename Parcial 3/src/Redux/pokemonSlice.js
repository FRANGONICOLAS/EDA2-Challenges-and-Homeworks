import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: true,
  hasError: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchPokemonStart: (state) => {
      state.isLoading = true;
      state.hasError = null;
    },
    fetchPokemonSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchPokemonFailure: (state, action) => {
      state.isLoading = false;
      state.hasError = action.payload;
    },
  },
});

export const { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonFailure } = pokemonSlice.actions;
export default pokemonSlice.reducer;