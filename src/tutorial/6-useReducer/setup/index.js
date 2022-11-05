import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    setShowModal(false);
    e.preventDefault();
    setPeople([...people, { name, id: new Date().getTime().toString() }]);
    setName("");
  };

  const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
    setShowModal(true);
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
      {showModal && <Modal />}
      {people &&
        people.map((person) => (
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
