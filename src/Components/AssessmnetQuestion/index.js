import React, { useState, useEffect } from "react";
import "./style.css";
import questions from "../../Data/questions";
import { useNavigate } from "react-router-dom";
import CountDownTimer from "../CountDownTimer";

function AssessmentQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSeeResults, setShowSeeResults] = useState(false);
  const [score, setScore] = useState(0);
  let navigate = useNavigate();

  // Timer //
  const hoursMinSecs = { seconds: 30 };
  // Timer End //

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

  // Sets score state in local storage //
  useEffect(() => {
    window.localStorage.setItem("score", score);
  }, [score]);

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
          <CountDownTimer hoursMinSecs={hoursMinSecs} />
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
                  }}
                  className="answer-button"
                >
                  {answerOption.answerText}
                </button>
              </div>
            ))}
          </div>
          <button
            //Create alert to let them know they will loose score //
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
