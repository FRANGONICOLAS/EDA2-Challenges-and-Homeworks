import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonFailure } from '../../Redux/pokemonSlice';
import { useCounter } from '../../Hooks/Pokemon/useCounter';
import '../../assets/PokemonApp.css';

const PokemonApp = () => {
  const { count: counter, increment } = useCounter(1);
  const dispatch = useDispatch();
  const { data, isLoading, hasError } = useSelector(state => state.pokemon);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPokemonStart());
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
        const data = await response.json();
        dispatch(fetchPokemonSuccess(data));
      } catch (error) {
        dispatch(fetchPokemonFailure('Error fetching data'));
      }
    };

    fetchData();
  }, [counter, dispatch]);

  return (
    <div className="pokemon-container">
      <h1>Pokemones</h1>
      {isLoading ? (
        <div className="alert alert-info">Loading...</div>
      ) : (
        data && (
          <div className="pokemon-info">
            <h2>{data.name}</h2>
            <img src={data.sprites.front_default} alt={data.name} />
          </div>
        )
      )}
      {hasError && <div className="alert alert-danger">{hasError}</div>}
      <button className="btn btn-primary" onClick={increment}>Next Pokemon</button>
    </div>
  );
};

export default PokemonApp;