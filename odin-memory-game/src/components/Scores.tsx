import React from "react";

interface ScoresProps {
  score: number;
  hiScore: number;
}

const Scores = ({ score, hiScore }: ScoresProps) => {
  return (
    <div>
      score:{score}
      hiScore:{hiScore}
    </div>
  );
};

export default Scores;
