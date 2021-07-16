import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import IncorrectArrays from "./components/IncorrectArrays";

function App() {
  //useState variables
  const [arrayIndex, setArrayIndex] = useState(0);
  const [classOn, setClassOn] = useState("trivia-cards-initial");
  const [triviaArray, setTriviaArray] = useState([]);
  const [disable, setDisable] = useState(true);
  const [results, setResults] = useState({
    correct: 0,
    answer: "",
  });
  const [incorrectArrayQuestions, setIncorrectArrayQuestions] = useState([]);
  const [incorrectArray, setIncorrectArray] = useState([]);

  //useEffects
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((res) => {
        setTriviaArray(res.data.results);
      });
  }, []);

  //onclicks and helper functions
  const nextQuestionOnClick = () => {
    setClassOn(`trivia-cards-initial-${arrayIndex}`);
    setResults(() => {
      if (triviaArray[arrayIndex].correct_answer === results.answer) {
        setResults({ ...results, correct: results.correct + 1 });
      } else {
        setResults({ ...results });
        setIncorrectArrayQuestions([
          ...incorrectArrayQuestions,
          triviaArray[arrayIndex].question,
        ]);
        setIncorrectArray([...incorrectArray, results.answer]);
      }
    });
    setArrayIndex(() => {
      if (arrayIndex > 8) {
        return 9;
      } else {
        return arrayIndex + 1;
      }
    });
    setDisable(true);
  };
  const beginOnClick = () => {
    setClassOn(`trivia-cards-initial-${arrayIndex}`);
    setArrayIndex(() => {
      if (arrayIndex > 8) {
        return 9;
      } else if (arrayIndex === 0) {
        return arrayIndex;
      } else {
        return arrayIndex + 1;
      }
    });
  };
  const tryAgainOnClick = () => {
    setArrayIndex(0);
    setClassOn("trivia-cards-initial");
    setResults({
      correct: 0,
      answer: "",
    });
    setIncorrectArrayQuestions([]);
    setIncorrectArray([]);
  };

  const answerButtonTrue = () => {
    setResults({
      ...results,
      answer: "True",
    });
    setDisable(false);
  };
  const answerButtonFalse = () => {
    setResults({
      ...results,
      answer: "False",
    });
    setDisable(false);
  };

  //JSX
  if (classOn === "trivia-cards-initial") {
    return (
      <div className={classOn}>
        <h1 className="title">Welcome To The Trivia Challange!</h1>
        <h3 className="text-content-middle">
          You will be presented with 10 True or False questions.
        </h3>
        <h3 className="text-content-bottom">Can you score 100%?</h3>
        <div className="begin-btn-bg">
          <button className="buttons" onClick={beginOnClick}>
            BEGIN
          </button>
        </div>
      </div>
    );
  } else if (classOn === "trivia-cards-initial-9") {
    return (
      <div className="bg-cards">
        <div className="trivia-end-card">
          <h2 className="finishing-text">
            {`You got ${
              results && results.correct > -1 && results.correct
            }/10 correct!`}
          </h2>
          <IncorrectArrays
            incorrectArr={incorrectArray}
            incorrectArrQuestions={incorrectArrayQuestions}
          />
          <button className="buttons" onClick={tryAgainOnClick}>
            Try Again?
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-cards">
        <div className="trivia-cards">
          <div className={classOn}>
            <h2 className="category">{triviaArray[arrayIndex].category}</h2>
            <h3 className="trivia-questions">{`${triviaArray[arrayIndex].question}`}</h3>
            <div className="truthy-btn-div">
              <button className="truthy-btn" onClick={answerButtonTrue}>
                True
              </button>
              <button className="truthy-btn" onClick={answerButtonFalse}>
                False
              </button>
            </div>
            <p>{`${arrayIndex + 1} out of 10`}</p>
            <div className="truthy-btn-div">
              <button
                className="buttons"
                onClick={nextQuestionOnClick}
                disabled={disable}
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
