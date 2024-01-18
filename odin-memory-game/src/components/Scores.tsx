import React from "react";

interface ScoresProps {
  score: number;
  hiScore: number;
}

const Scores = ({ score, hiScore }: ScoresProps) => {
  return (
    <div className="fw-semibold">
      Score: {score} || HiScore: {hiScore}
    </div>
  );
};

export default Scores;
