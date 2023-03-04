import React, { useState } from "react";
import { data } from "../../../data";
// import Person from "./Person";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  // Below is for if I wanna use reference method where i define the function and reference it in the event
  // const handleRemove = ()=>{
  //   setPeople([])
  // }

  const removeEach = (item) => {
    // let newPeople = people.filter((person) => person.id !== item);
    // setPeople(newPeople); ---- CASE 1

    //We can do as above or directly write the functionality inside the setter function as shown below:

    setPeople(people.filter((props) => props.id !== item)); //--CASE 2
  };

  //4th Nov,2022
  //Tried to change color of text on MouseEnter
  //Recalled that we can't mutate state directly in React
  //Hence I proceed to useState

  const [textColor, setTextColor] = useState("red");

  const changeColor = () => {
    if (textColor) setTextColor("green");
    if (textColor !== "red") setTextColor("red");
  };
  return (
    <>
      {people.map((person) => {
        const {id, name, age} = person

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <h5>{age}</h5>
            <button
              className="btn"
              style={{ color: textColor }}
              onMouseOver={changeColor}
              onClick={() => removeEach(id)}
            >
              {" "}
              Delete
            </button>
          </div>
        );
        {
          /*<Person key={id}  {...person} />*/
        }
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
    </>
  );
};

export default UseStateArray;
