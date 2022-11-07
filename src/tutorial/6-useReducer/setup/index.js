import React, { useState, useReducer, useEffect, useRef } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "../setup/reducer.js";

const defaultState = {
  people: [],
  showModal: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispetch] = useReducer(reducer, defaultState);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispetch({ type: "ADD_PERSON", payload: newPerson });
      setName("");
    } else {
      dispetch({ type: "NO_VALUE" });
    }
  };

  const handleRemove = (id) => {
    dispetch({ type: "REMOVE_ITEM", payload: id });
  };

  const hideModal = () => {
    dispetch({ type: "HIDE_MODAL" });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.showModal && (
        <Modal hideModal={hideModal} modalContent={state.modalContent} />
      )}
      {state.people.map((person) => (
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
