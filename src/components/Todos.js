import React from "react";
import { useState } from "react";
import "./Todos.css";
import TodosModal from "./TodosModal";
import TodosBackdrop from "./TodosBackdrop";
const Todos = (props) => {
  const [showModal, setShowModal] = useState(false);
  const ModalHandler = () => {
    setShowModal(true);
  };
  const HideModal = () => {
    setShowModal(false);
  };
  const BackTo = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="todosBox">
        <div className="todosTitle">{props.name}</div>
        <div className="button">
          <button className="btn4" onClick={ModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal ? <TodosModal Cancel={HideModal} /> : null}
      {showModal ? <TodosBackdrop Back={BackTo} /> : null}
    </div>
  );
};

export default Todos;
