import { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import GameOverScreen from "./components/GameOverScreen";
import Scores from "./components/Scores";
import Instructions from "./components/Instructions";
import Loading from "./components/Loading";

function App() {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  const [score, setScore] = useState(0);
  const [chosenPokeIds, setChosenPokeIds] = useState<string[]>([]);
  const [hiScore, setHiScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  interface PokemonData {
    name: string;
    id: number;
    sprites: {
      front_default: string;
    };
  }

  useEffect(() => {
    const pokemonCount = 10;

    fetchPokemonDataXTimes(pokemonCount);
  }, []);

  const handleGameOver = () => {
    if (hiScore < score) {
      setHiScore(score + 1);
    }

    setGameOver(true);
  };

  const handlePokemonClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const pokeId = e.currentTarget.id;

    if (chosenPokeIds.includes(pokeId)) {
      handleGameOver();
      return;
    }

    if (score >= pokemonData.length - 1) {
      if (score >= pokemonData.length) {
        return;
      }
      setScore(() => score + 1);
      handleGameOver();
      return console.log("wow u got 10 right nice memory, nerd");
    }

    setScore(() => score + 1);
    setChosenPokeIds([...chosenPokeIds, pokeId]);
    shuffle(pokemonData);
  };

  const shuffle = (array: PokemonData[]) => {
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

  const fetchPokemonDataXTimes = async (pokemonCount: number) => {
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
    setIsLoading(false);
  };

  const startNewGame = () => {
    setGameOver(false);
    shuffle(pokemonData);
    setScore(0);
    setChosenPokeIds([]);
  };

  const fetchNewPokes = () => {
    startNewGame()
    setIsLoading(true)
    fetchPokemonDataXTimes(10)
  }

  const generateRandomPokemonId = (min = 1, max = 1000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <div className=" container  min-vh-100 d-flex flex-column  bg-dark text-white bg-gradient mx-0 min-vw-100 p-sm-0">
        <div className="d-flex justify-content-between mt-sm-5 mx-5 gap-2">
          <Instructions />
          <Scores score={score} hiScore={hiScore} />
        </div>

        {isLoading ? (
          <Loading/>
        ) : (
          <PokemonList
            pokemonData={pokemonData}
            handlePokemonClick={handlePokemonClick}
          />
        )}
      </div>
      {gameOver && (
        <GameOverScreen
          startNewGame={startNewGame}
          score={score}
          hiScore={hiScore}
          fetchNewPokes={fetchNewPokes}
        />
      )}
    </>
  );
}

export default App;
