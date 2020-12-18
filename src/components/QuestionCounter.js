import React from "react";

const QuestionCounter = ({ currentQuestion }) => {
  return (
    <div className="question-counter">
      <div
        className="counter"
        style={{ width: `${((currentQuestion + 1) / 20) * 100}%` }}></div>
    </div>
  );
};

export default QuestionCounter;
