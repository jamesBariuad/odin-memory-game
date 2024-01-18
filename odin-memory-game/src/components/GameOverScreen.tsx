import FetchNewPokesButton from "./FetchNewPokesButton";
interface GameOverScreenProps {
  score: number;
  hiScore: number;
  startNewGame: () => void;
  fetchNewPokes: ()=>void;
}

const GameOverScreen = ({
  score,
  hiScore,
  startNewGame,
  fetchNewPokes,
}: GameOverScreenProps) => {
  return (
    <div onClick={startNewGame}>
      <div className=" bg-black opacity-50 position-absolute vh-100 w-100 top-0 text-center"></div>
      <div className="text-white bg-black position-absolute top-50 start-50 translate-middle text-center p-5 rounded-4 d-flex flex-column gap-2">
        <div className="fw-bold fs-2">Gameover!</div>
        <div>
          <div className="fw-medium">Your Score: {score}</div>
          <div className="fw-medium">Hi Score: {hiScore}</div>
        </div>

        <div className="text-nowrap fw-lighter fst-italic">
          click anywhere to play again
        </div>
        <div>or</div>
        <FetchNewPokesButton fetchNewPokes={fetchNewPokes} />
      </div>
    </div>
  );
};

export default GameOverScreen;
