import React, { useState } from "react";

import starIcon from "../images/star.svg";
import starNotFilledIcon from "../images/starnotfilled.svg";

const Question = ({
  data,
  currentQuestion,
  nextQuestion,
  correct,
  setCorrect,
  incorrect,
  setIncorrect,
}) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [ansSelected, setAnsSelected] = useState();
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const onClickAnsHandler = (value) => {
    setAnsSelected(true);
    if (value === data[currentQuestion].correct_answer) {
      setIsCorrect(true);
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const onNextClick = () => {
    nextQuestion();
    setIsCorrect(false);
    setAnsSelected(false);
  };

  return (
    <div className="question">
      <h1>{`Question ${currentQuestion + 1} of 20`}</h1>
      <p>
        {data[currentQuestion].category ? data[currentQuestion].category : ""}
      </p>
      <div className="star-wrapper">
        <div className="star">
          {data[currentQuestion].difficulty === "easy" ? (
            <>
              {" "}
              <img src={starIcon} alt="star"></img>
              <img src={starNotFilledIcon} alt="star"></img>
              <img src={starNotFilledIcon} alt="star"></img>
            </>
          ) : (
            ""
          )}

          {data[currentQuestion].difficulty === "medium" ? (
            <>
              {" "}
              <img src={starIcon} alt="star"></img>
              <img src={starIcon} alt="star"></img>
              <img src={starNotFilledIcon} alt="star"></img>
            </>
          ) : (
            ""
          )}

          {data[currentQuestion].difficulty === "hard" ? (
            <>
              {" "}
              <img src={starIcon} alt="star"></img>
              <img src={starIcon} alt="star"></img>
              <img src={starIcon} alt="star"></img>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <h2>{data[currentQuestion].question}</h2>
      <div className="answer-wrapper">
        {shuffleArray([
          data[currentQuestion].correct_answer,
          ...data[currentQuestion].incorrect_answers,
        ]).map((answers) => (
          <input
            type="button"
            value={answers}
            onClick={(e) => onClickAnsHandler(e.target.value)}
            className={
              ansSelected
                ? answers === data[currentQuestion].correct_answer
                  ? "correct"
                  : ""
                : ""
            }
            disabled={
              ansSelected
                ? answers === data[currentQuestion].correct_answer
                  ? "false"
                  : "true"
                : ""
            }
          />
        ))}
      </div>
      <div className="correct-answer">
        {ansSelected ? (
          <>
            <h2>{isCorrect ? "Correct" : "Sorry!"}</h2>
            <button onClick={onNextClick}>Next Question</button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Question;
