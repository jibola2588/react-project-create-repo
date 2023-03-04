import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const incBy3 = () => {
    setValue(value + 3);
  };

  useEffect(() => {
    console.log("UseEffect called");

    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", incBy3);

    if (value >= 1) {
      document.title = `New Message{${value}}`;
    }
  },[value]);

  console.log("render component");
  return (
    <>
      <h2>{value}</h2>
      <button
        id="btn1"
        //commented out onClick and then used useEffect instead
        // onClick={() => setValue(value + 1)}
        className="btn"
      >
        click me
      </button>
      <button
        onClick={() => {
          if (value === 0) {
            window.alert(`You can't reset what's already resetted`);
          } else {
            setValue(0);
          }
        }}
        className="btn"
      >
        Reset
      </button>
    </>
  );
};

export default UseEffectBasics;
