import React, { useState, useRef } from "react";
import { createSearchParams, Link, Outlet } from "react-router-dom";

const FollowMe = () => {
  const inputFieled = useRef();
  const clickHandler = (event) => {
    console.log(inputFieled.current.value);
  };

  return (
    <div className="followField">
      <input className="followMe" ref={inputFieled} />
      <button className="btn3" onClick={clickHandler}>
        Submit
      </button>

      <Outlet />
    </div>
  );
};

export default FollowMe;
