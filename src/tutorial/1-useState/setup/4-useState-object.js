import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Joe",
    age: "18",
    message: "You have reached Joe",
  });
  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button
        className="btn"
        onClick={() => setPerson({ ...person, message: "New Message" })}
      >
        Click Here
      </button>
    </>
  );
};

export default UseStateObject;
