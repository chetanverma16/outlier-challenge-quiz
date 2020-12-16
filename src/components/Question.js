import React from "react";

const Question = ({ data, currentQuestion }) => {
  console.log(data, currentQuestion);
  return (
    <div className="question">
      <h1>{`Question ${currentQuestion} of 20`}</h1>
      <p>: Board Games</p>
      <div className="star-wrapper">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <h2>
        What was the name of the hero in the 80s animated video game's Dragon's
        Lair's
      </h2>
      <div className="answer-wrapper">
        <button> Electric Company</button>
        <button> Waiter Works</button>
        <button> Chance</button>
        <button> Community Chest</button>
      </div>
    </div>
  );
};

export default Question;
