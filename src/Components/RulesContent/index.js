import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function RulesContent() {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const checkBoxHandler = () => {
    setChecked(!checked);
  };

  return (
    <div>
      {!visible && (
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Refresh" : "Review Rules"}
        </button>
      )}
      {visible && (
        <div>
          <h1>Rules</h1>
          <div>
            <ul>
              <p>dsf sdfdsfsdfdsf sdafgfasfg</p>
              <p>dsf sdfdsfsdfdsf sdafgfasfg</p>
              <p>dsf sdfdsfsdfdsf sdafgfasfg</p>
              <p>dsf sdfdsfsdfdsf sdafgfasfg</p>
              <p>dsf sdfdsfsdfdsf sdafgfasfg</p>
              <p>dsf sdfdsfsdfdsf sdafgfasfg</p>
            </ul>
            <h2>Please check box to verify you understand rules</h2>
            <div>
              <input
                type="checkbox"
                id="agree"
                onChange={checkBoxHandler}
              ></input>
            </div>
            <button
              disabled={!checked}
              onClick={() => {
                navigate("/startassessment");
              }}
            >
              continue to start page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RulesContent;
