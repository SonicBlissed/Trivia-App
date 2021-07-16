import React, { useState } from "react";

function IncorrectArrays(props) {
  const { incorrectArr, incorrectArrQuestions } = props;
  return (
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
  );
}

export default IncorrectArrays;
