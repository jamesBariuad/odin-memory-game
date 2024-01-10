import React from 'react'

const PokemonList = ({pokemonData}) => {
    console.log(pokemonData)
    const pokeList = pokemonData.map(pokemon=>
        <div key={pokemon.id}>
            <h5>{pokemon.name}</h5>
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name} image`}/>

        </div>

    )
  return (
    <>
        {pokeList}
    </>
  )
}

export default PokemonList