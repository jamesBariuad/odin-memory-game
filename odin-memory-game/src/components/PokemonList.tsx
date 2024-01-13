import React from "react";

const PokemonList = ({ pokemonData, handlePokemonClick }) => {
  const pokeList = pokemonData.map((pokemon) => (
    <div key={pokemon.id} onClick={handlePokemonClick} id={pokemon.id} >
      <h5 style={{pointerEvents:"none"}}>{pokemon.name}</h5>
      <img style={{pointerEvents:"none"}} src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
    </div>
  ));
  return <>
    <div className="d-flex flex-wrap">
  {pokeList}

    </div>
  </>;
};

export default PokemonList;
