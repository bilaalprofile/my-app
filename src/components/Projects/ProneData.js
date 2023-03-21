import React from "react";
import { memo } from "react";
const ProneData = ({ todos, addTodo }) => {
  console.log("child rendered");
  return (
    <div className="projectOneAllData">
      <h4 className="todoHeader">My Todos</h4>
      {todos.map((todo, index) => {
        return (
          <p className="todoData" key={index}>
            {todo}
          </p>
        );
      })}
      <button className="btn3" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default memo(ProneData);
