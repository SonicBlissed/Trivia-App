import React from "react";

function IncorrectResults(props) {
  //destructuring...sheesh that's a lot~! Any advice on ways to condense all this stuff I have to pass through?
  const { incorrectArr, incorrectArrQuestions, results, setIncorrectArray, setIncorrectArrayQuestions, setArrayIndex, setClassOn, setResults} = props;
  //the onclick for the try again button
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

  
  return (
    <div className="bg-cards">
        <div className="trivia-end-card">
          <h2 className="finishing-text">
            {`You got ${
              results && results.correct > -1 && results.correct
            }/10 correct!`}
          </h2>
          <h3>
      Here's What You Missed:
      <div className="results">
        <div className="results-questions">
          {incorrectArrQuestions.map((arr) => {
            return (
              <div>
                <p>{arr}</p>
              </div>
            );
          })}
        </div>
        <div className="results-booleans">
          {incorrectArr.map((arr) => {
            return (
              <div>
                <p>Your Answer: {arr}</p>
              </div>
            );
          })}
        </div>
      </div>
    </h3>
          <button className="buttons" onClick={tryAgainOnClick}>
            Try Again?
          </button>
        </div>
      </div>
  );
}

export default IncorrectResults;
