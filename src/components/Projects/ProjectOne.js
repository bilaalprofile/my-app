import React from "react";
import ProneData from "./ProneData";
import { useState, useCallback } from "react";

const ProjectOne = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["I'm Very Busy"]);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const addTodo = useCallback(() => {
    console.log("button Clicked");
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div className="prOne">
      <div className="prOne">
        <div className="count">{count}</div>
        <button className="btn4" onClick={increment}>
          +
        </button>
      </div>
      <ProneData todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default ProjectOne;
