import React from "react";
import ReactDOM from "react-dom";
// import people from "./people";
import people from "./data";
import Reminder from "./reminder";
import "./style.css";
import { useState } from "react";

function Birthday() {
  const [peopleState, setPeople] = useState(people);

  return (
    <>
      <div className="contentC">
        <h2>{peopleState.length} birthdays today</h2>
        <Reminder people={peopleState} className="people" />
        <div className="btnC">
          <button className="btn" onClick={() => setPeople([])}>
            clear all
          </button>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Birthday />
  </React.StrictMode>,
  document.getElementById("root")
);
