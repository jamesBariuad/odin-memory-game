import React from "react";

const GameOverScreen = ({ score, hiScore, startNewGame }) => {
  return (
    <div onClick={startNewGame}>
      <div className=" bg-black opacity-50 position-absolute vh-100 w-100 top-0 text-center"></div>
      <div className="text-white bg-black position-absolute top-50 start-50 translate-middle text-center">
        Gameover! 
        <br />
        Your Score: {score}
        <br />
        Hi Score :{hiScore}
        <br />
        press anywhere to play again
      </div>
    </div>
  );
};

export default GameOverScreen;
