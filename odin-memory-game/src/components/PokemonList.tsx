import React from "react";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

interface PokemonListProps {
  pokemonData: Pokemon[];
  handlePokemonClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const PokemonList = ({ pokemonData, handlePokemonClick }: PokemonListProps) => {
  const pokeList = pokemonData.map((pokemon) => (
    <div key={pokemon.id} onClick={handlePokemonClick} id={pokemon.id.toString()} >
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
