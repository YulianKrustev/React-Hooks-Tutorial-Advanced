import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    value > 0
      ? (document.title = `New Messages(${value})`)
      : (document.title = document.title);
  });

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
