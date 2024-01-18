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
    <div
      key={pokemon.id}
      onClick={handlePokemonClick}
      id={pokemon.id.toString()}
      className="text-center card p-3 d-flex bg-light bg-gradient"
      
    >
        <img
          style={{ pointerEvents: "none" }}
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} image`}
          className="card-img-top"
        />
      <div className=""> 
        <p style={{ pointerEvents: "none", whiteSpace:"nowrap" }} className="card-text fw-semibold fs-6 flex-shrink-1">
          {pokemon.name}
        </p>
      </div>
    </div>
  ));
  return (
    <>
      <div className="d-flex flex-wrap gap-2 justify-content-center mx-sm-5 my-sm-5">{pokeList}</div>
    </>
  );
};

export default PokemonList;
