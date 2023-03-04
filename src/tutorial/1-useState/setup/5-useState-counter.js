import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setInterval(() => {
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };

  const complexInc = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 4000);
  };
  return (
    <>
      <section className="" style={{ margin: "4rem 0" }}>
        <div>
          {" "}
          <h2>Regular Counter</h2>
          <h1>{value}</h1>
          <button
            className="btn"
            onClick={() => {
              if (value >= 1) setValue(value - 1);
              else alert("Can't decrease below 0");
            }}
          >
            decrease
          </button>
          <button className="btn" onClick={() => setValue(0)}>
            reset
          </button>
          <button className="btn" onClick={handleIncrease}>
            increase
          </button>
          <button
            className="btn"
            onClick={() => {
              setValue(value + 2);
            }}
          >
            incr by 2
          </button>
        </div>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexInc}>
          complex increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
