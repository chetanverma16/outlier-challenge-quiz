import React, { useEffect } from "react";

const ScoreCounter = ({ currentQuestion, correct, incorrect }) => {
  const calculateCurrentScore = () => {
    if (currentQuestion === 0 || correct === 0) {
      return 0;
    }
    return (correct / 20) * 100;
  };

  const calculateMaximumScore = () => {
    if (currentQuestion === 0 || correct === 0) {
      return 0;
    }
    return (currentQuestion / 20) * 100;
  };
  const calculateLowestScore = () => {
    if (currentQuestion === 0 || incorrect === 0) {
      return 0;
    }
    return ((currentQuestion - correct) / 20) * 100;
  };

  useEffect(() => {
    console.log(incorrect);
  }, [incorrect]);

  return (
    <div className="score-counter">
      <div className="wrapper">
        <div className="text-wrapper">
          <div className="score-text">Score {calculateCurrentScore()}%</div>
          <div className="max-score-text">
            Max Score : {calculateMaximumScore()}%
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-correct"
            style={{ width: `${calculateCurrentScore()}%` }}></div>
          <div
            className="progress-bar-max"
            style={{ width: `${calculateMaximumScore()}%` }}></div>
          <div
            className="progress-bar-low"
            style={{ width: `${calculateLowestScore()}%` }}></div>
        </div>
      </div>
      <div className="progress-bar progress-bar-second">
        <div
          className="progress-bar-low"
          style={{ width: `${calculateLowestScore()}%` }}></div>
      </div>
    </div>
  );
};

export default ScoreCounter;
