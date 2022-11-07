import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [peopele, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(peopele.filter((person) => person.id !== id));
  };
  return (
    <>
      <section>
        <h2>prop drilling</h2>
        <List peopele={peopele} removeItem={removeItem} />
      </section>
    </>
  );
};

const List = ({ peopele, removeItem }) => {
  return (
    <>
      {peopele.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} removeItem={removeItem} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removeItem }) => {
  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>remove</button>
      </div>
    </>
  );
};

export default PropDrilling;
