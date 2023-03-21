import React from "react";

const TodosModal = (props) => {
  return (
    <section className="modalBox">
      <div className="todosModal">
        <h2 className="modalTitle">Are you sure</h2>
        <div className="Modalbtn">
          <button className="ModalCancel" onClick={props.Cancel}>
            Cancel
          </button>
          <button className="ModalConfirm" onClick={props.Cancel}>
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodosModal;
