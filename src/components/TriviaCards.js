import React, { useState } from "react";

function TriviaCards(props) {
  //PROPS
  const {
    incorrectArray,
    setIncorrectArray,
    incorrectArrayQuestions,
    setIncorrectArrayQuestions,
    results,
    setResults,
    arrayIndex,
    setArrayIndex,
    classOn,
    setClassOn,
    triviaArray,
  } = props;

  //USESTATE
  const [disable, setDisable] = useState(true);

  /////////ON CLICKS/////////
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

  /////////JSX/////////
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

export default TriviaCards;
