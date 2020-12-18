import React, { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import QuestionCounter from "./components/QuestionCounter";
import ScoreCounter from "./components/ScoreCounter";
import questionsData from "./questions.json";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [showFinalScreen, setShowFinalScreen] = useState(false);
  const nextQuestion = () => {
    if (currentQuestion === 19) {
      setCurrentQuestion(19);
      setShowFinalScreen(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="App">
      {showFinalScreen ? (
        `Your answered ${correct} correct answers and ${incorrect} incorrect answers`
      ) : (
        <>
          <QuestionCounter currentQuestion={currentQuestion}></QuestionCounter>
          <Question
            data={questionsData}
            currentQuestion={currentQuestion}
            nextQuestion={nextQuestion}
            correct={correct}
            incorrect={incorrect}
            setIncorrect={setIncorrect}
            setCorrect={setCorrect}></Question>
          <ScoreCounter
            currentQuestion={currentQuestion}
            correct={correct}
            incorrect={incorrect}></ScoreCounter>
        </>
      )}
    </div>
  );
};

export default App;
