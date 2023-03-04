import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, age } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <h5>{age}</h5>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>Clear</button>
      <button className="btn" onClick={() => setPeople(data)}>
        reset
      </button>
    </>
  );
};

export default UseStateArray;
