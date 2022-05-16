import React from "react";
// import people from "./data";
import "./style.css";
const Reminder = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { img, id, name, age } = person;
        return (
          <article key={id} className="people">
            <div className="personContainer">
              <img src={img} alt="" />
              <div>
                <h3>{name}</h3>
                <h4>{age}</h4>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Reminder;
