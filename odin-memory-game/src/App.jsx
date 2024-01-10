import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const pokemonCount = 10;

    const fetchPokemonDataXTimes = async () => {
      const newData = [];
      for (let index = 0; index < pokemonCount; index++) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${generateRandomPokemonId()}`
          );
          newData.push(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      setPokemonData(newData);
    };

    fetchPokemonDataXTimes();
  }, []);

  const generateRandomPokemonId = (min = 0, max = 1000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  console.log(pokemonData);
  return (
    <>
      <PokemonList pokemonData={pokemonData} />
    </>
  );
}

export default App;
