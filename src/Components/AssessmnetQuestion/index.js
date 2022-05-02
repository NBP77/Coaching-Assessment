import React, { useState, useEffect } from "react";
import "./style.css";
import questions from "../../Data/questions";
import { useNavigate } from "react-router-dom";

  ///////////////////////////////////////////////////////

  // To do:

  // Show last five scores at home page

  // Set score if player tries to refresh page and cheat 

  // custom alert if player wants to end quiz and return to the home screen

  ///////////////////////////////////////////////////////

function AssessmentQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSeeResults, setShowSeeResults] = useState(false);
  const [score, setScore] = useState(0);
  let navigate = useNavigate();

  ///////////////////////////////////////////////////////

  // Timer //
  const hoursMinSecs = { seconds: 5 };
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    const nextQuestion = currentQuestion + 1;
    const timesUp = hrs === 0 && mins === 0 && secs === 0;
    const endOfQuestions = nextQuestion >= questions.length;

    if (timesUp) {
      reset();
      setCurrentQuestion(nextQuestion);
      if (timesUp && endOfQuestions) {
        setShowSeeResults(true);
      }
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });
 
  ///////////////////////////////////////////////////////

  // Quiz functionality // 

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowSeeResults(true);
    }
  };

  const onClickReset = () => {
    reset();
  };

  useEffect(() => {
    window.localStorage.setItem("score", score);
  }, [score]);

  ///////////////////////////////////////////////////////

  // Window refresh alert //
  useEffect(() => {
    window.onbeforeunload = function () {
      return true;
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  ///////////////////////////////////////////////////////

  return (
    <div>
      {showSeeResults ? (
        <div className="results-box">
          <div>You have finished please click button to see results</div>
          <button
            onClick={() => {
              navigate("/resultspage");
            }}
          >
            See results
          </button>
        </div>
      ) : (
        <div>
          <div>
            <div>{`${secs.toString().padStart(2)}`}</div>
          </div>
          <div>
            {score} out of {questions.length}
          </div>
          <div className="question-section">
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <div>
                <button
                  onClick={() => {
                    handleAnswerButtonClick(answerOption.isCorrect);
                    onClickReset();
                  }}
                  className="answer-button"
                >
                  {answerOption.answerText}
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            To stop assessment click here
          </button>
        </div>
      )}
    </div>
  );
}

export default AssessmentQuestion;
