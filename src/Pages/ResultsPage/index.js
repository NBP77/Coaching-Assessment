import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import questions from "../../Data/questions";

function ResultsPage() {
  const [ setCurrentQuestion ] = useState(0);
  const [score, setScore] = useState(0);
  

  const replayGame = () => {
    window.location.reload();
    setCurrentQuestion(0);
    setScore(0);
  };
  

  // Grabs score state out of local storage //
  // Have to make it so local storage does not refresh if you refresh during quiz //
  useEffect(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    if (score) {
      setScore(score);
    }
  }, []);

  let convertedFinalScore = Math.trunc((score / questions.length) * 100);

  let navigate = useNavigate();

  return (
    <div>
      <h1>Your results</h1>
      <div className="score-box">
        <div>You scored a {convertedFinalScore}%</div>
      </div>

      <button
        onClick={() => {
          navigate("/");
          replayGame();
        }}
      >
        Try again?
      </button>
    </div>
  );
}

export default ResultsPage;
