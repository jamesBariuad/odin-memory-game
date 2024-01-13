import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import GameOverScreen from "./components/GameOverScreen";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [score, setScore] = useState(0);
  const [chosenPokeIds, setChosenPokeIds] = useState([]);
  const [hiScore, setHiScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const handleGameOver = () => {
    if (hiScore < score) {
      setHiScore(score);
    }

    if (score == pokemonData.length) {
      console.log("Nice, you got a good memory!");
    }

    setGameOver(true);
  };

  const handlePokemonClick = (e) => {
    const pokeId = e.target.id;

    if (chosenPokeIds.includes(pokeId)) {
      handleGameOver();
      return console.log("gameOver");
    }

    setChosenPokeIds([...chosenPokeIds, pokeId]);
    setScore(score + 1);
    shuffle(pokemonData);
  };


  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    setPokemonData(shuffledArray);
  };

  const fetchPokemonDataXTimes = async (pokemonCount) => {
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
    setIsLoading(false)
  };

  const startNewGame = () => {
    // setIsLoading(true)
    setGameOver(false);
    // fetchPokemonDataXTimes(10);
    shuffle(pokemonData)
    setScore(0)
    setChosenPokeIds([])
  };

  useEffect(() => {
    const pokemonCount = 10;

    fetchPokemonDataXTimes(pokemonCount);
  }, []);

  const generateRandomPokemonId = (min = 0, max = 1000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <div className="position-relative">
        score:{score}
        hiScore:{hiScore}
        <button onClick={() => shuffle(pokemonData)}>shuffle</button>
        {isLoading?"loading..": (
          <PokemonList
            pokemonData={pokemonData}
            handlePokemonClick={handlePokemonClick}
          />
        )}
        {gameOver && <GameOverScreen  startNewGame={startNewGame} score={score} hiScore={hiScore}/>}
      </div>
    </>
  );
}

export default App;
