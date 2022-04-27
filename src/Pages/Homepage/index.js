import React from "react";
import "./style.css";
import RulesContent from "../../Components/RulesContent";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Coaching Situational Awareness Assessment</h1>
      <div>
        Welcome to CSAA please review rules before beginning assessment
      </div>
      <div>
        <RulesContent />{" "}
      </div>
    </div>
  );
}

export default Homepage;
