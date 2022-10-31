import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Julian",
    age: 38,
    message: "Random Message",
  });

  const handleClick = () => {
    const newMessage = " Hello World";

    setPerson({ ...person, message: newMessage });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
