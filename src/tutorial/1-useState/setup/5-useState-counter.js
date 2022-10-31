import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrease = () => {
    setValue((prevState) => prevState - 1);
  };

  const moreComplex = () => {
    setTimeout(() => {
      setValue((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={decrease}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={increase}>
          Increase
        </button>
      </section>
      <section>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={moreComplex}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
