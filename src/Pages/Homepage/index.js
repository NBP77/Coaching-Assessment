import { React, useState, useEffect } from "react";
import "./style.css";
import RulesContent from "../../Components/RulesContent";
import questions from "../../Data/questions";

function Homepage() {
  
  const [score, setScore] = useState(0);
  useEffect(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    if (score) {
      setScore(score);
    }
  }, []);

  let convertedFinalScore = Math.trunc((score / questions.length) * 100);

  return (
    <div className="homepage">
      <div className="lastScore-box">
        <div className="lastScore-text">Last score: {convertedFinalScore}%</div>
      </div>
      <h1>Coaching Situational Awareness Assessment</h1>
      <div>Welcome to CSAA please review rules before beginning assessment</div>
      <div>
        <RulesContent />{" "}
      </div>
    </div>
  );
}

export default Homepage;
