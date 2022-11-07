export const reducer = (state, action) => {
  if (action.type === "ADD_PERSON") {
    const newPeople = [...state.people, action.payload];

    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "Item added",
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const peopleAfterRemove = [
      ...state.people.filter((person) => person.id != action.payload),
    ];

    const modalContent = "Item removed";
    const newPeople = {
      ...state,
      people: peopleAfterRemove,
      modalContent,
      showModal: true,
    };
    return newPeople;
  }

  if (action.type === "NO_VALUE") {
    const modalContent = "Please enter value";
    const showModal = true;
    return { ...state, modalContent, showModal };
  }

  if (action.type === "HIDE_MODAL") {
    return { ...state, showModal: false };
  }

  return new Error("no matching action type");
};
