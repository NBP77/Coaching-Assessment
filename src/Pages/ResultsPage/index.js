import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";


function ResultsPage() {

const calculateScore = () => {
  
}

  let navigate = useNavigate();

  return (
    <div>
      <h1>Your results</h1>
      <div className="score-box">
        <div>You scored a %</div>
      </div>
      {/* Dynamically display your score  */}
      
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Try again?
      </button>
    </div>
  );
}

export default ResultsPage;
