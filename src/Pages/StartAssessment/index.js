import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function StartAssessment() {
  let navigate = useNavigate();

  return (
    <div className="start-assessment">
      <button
        onClick={() => {
          navigate("/assessment");
        }}
      >
        Please press to begin assessment
      </button>
      {/* make button big and in center of the screen */}
    </div>
  );
}

export default StartAssessment;
