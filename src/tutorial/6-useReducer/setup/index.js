import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  console.log(state);
  if (action.type === "ADDPERSON") {
    const newPerson = {
      ...state,
      people: [
        ...state.people,
        { id: new Date().getTime().toString(), name: action.payload },
      ],
    };

    return newPerson;
  }

  if (action.type === "REMOVEITEM") {
    const peopleAfterRemove = [
      ...state.people.filter((person) => person.id != action.payload),
    ];
    const newPeople = { ...state, people: peopleAfterRemove };
    return newPeople;
  }
};

const defaultState = {
  people: [],
  showModal: false,
  text: "Test",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispetch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispetch({ type: "ADDPERSON", payload: name });
    setName("");
  };

  const handleRemove = (id) => {
    dispetch({ type: "REMOVEITEM", payload: id });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.showModal && <Modal text={state.text} />}
      {state.people &&
        state.people.map((person) => (
          <article key={person.id}>
            <div className="item">
              <h4>{person.name}</h4>
              <button onClick={() => handleRemove(person.id)}>remove</button>
            </div>
          </article>
        ))}
    </>
  );
};

export default Index;
