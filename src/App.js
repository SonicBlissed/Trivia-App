import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import IncorrectResults from "./components/IncorrectResults";
import InitialPage from "./components/InitialPage";
import TriviaCards from "./components/TriviaCards";

function App() {
  //useState variables
  // I try to put use states in the level just above the components I'll be using to make it less confusing on myself when I can.
  const [arrayIndex, setArrayIndex] = useState(0);
  const [classOn, setClassOn] = useState("trivia-cards-initial");
  const [triviaArray, setTriviaArray] = useState([]);

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

  //JSX
  if (classOn === "trivia-cards-initial") {
    return (
      <InitialPage
        classOn={classOn}
        setClassOn={setClassOn}
        setArrayIndex={setArrayIndex}
        arrayIndex={arrayIndex}
      />
    );
  } else if (classOn === "trivia-cards-initial-9") {
    return (
      <IncorrectResults
        incorrectArr={incorrectArray}
        setIncorrectArray={setIncorrectArray}
        incorrectArrQuestions={incorrectArrayQuestions}
        setIncorrectArrayQuestions={setIncorrectArrayQuestions}
        results={results}
        setArrayIndex={setArrayIndex}
        setClassOn={setClassOn}
        setResults={setResults}
      />
    );
  } else {
    return (
      <TriviaCards
        incorrectArray={incorrectArray}
        setIncorrectArray={setIncorrectArray}
        incorrectArrayQuestions={setIncorrectArrayQuestions}
        results={results}
        setResults={setResults}
        arrayIndex={arrayIndex}
        setArrayIndex={setArrayIndex}
        classOn={classOn}
        setClassOn={setClassOn}
        triviaArray={triviaArray}
      />
    );
  }
}

export default App;
