import React from 'react';



function InitialPage(props) {
    //destructure props
    const {classOn, setClassOn, setArrayIndex, arrayIndex} = props;
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
}

export default InitialPage;