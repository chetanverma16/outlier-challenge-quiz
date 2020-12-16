import React, { useState, useEffect } from "react";
import "./App.css";
import Question from "./components/Question";
import localData from "./questions.json";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsData, setQuestionsData] = useState({});
  const nextQuestion = () => setCurrentQuestion(currentQuestion + 1);

  useEffect(() => {
    setQuestionsData(JSON.parse(JSON.stringify(localData)));
    console.log(questionsData);
  }, []);

  return (
    <div className="App">
      <Question
        data={questionsData}
        currentQuestion={currentQuestion}></Question>
    </div>
  );
};

export default App;
