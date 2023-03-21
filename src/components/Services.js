import { Action } from "@remix-run/router";
import React from "react";
import { useReducer } from "react";
import { Link, Outlet } from "react-router-dom";
const reducer = (state, Action) => {
  if (Action.type == "inc") {
    return state + 1;
  } else if (Action.type == "dec") {
    return state - 1;
  } else if (Action.type == "mul") {
    return state * 2;
  } else if (Action.type == "reset") {
    return (state = 0);
  }
};
const Services = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div className="Services">
        I can create best responsive Website for you using react js
      </div>
      <div className="hrLine">
        <hr className="Hr"></hr>
        <hr className="Hr"></hr>
      </div>
      <div className="reducer">
        <h1 className="serviceNum"> {state}</h1>
        <button className="btn" onClick={() => dispatch({ type: "inc" })}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch({ type: "dec" })}>
          Decrement
        </button>
        <button className="btn" onClick={() => dispatch({ type: "mul" })}>
          Multiply
        </button>
        <button className="btn" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Services;
