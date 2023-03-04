import React, { useState } from "react";

let text = "random title";
let newText = "New Title";

const UseStateBasics = () => {
  const [title, setTitle] = React.useState(text);

  const toggleText = () => {
    if (title === text) {
      console.log("You reached here");
      setTitle(newText);
    } else {
      setTitle(text);
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={toggleText}>
        change the title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
