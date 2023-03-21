import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, mul, reset } from "../../states/reducer/Redux";
const ProjectTwo = () => {
  const curCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="Services">Learning Redux</div>
      <div className="hrline">
        <hr className="Hr"></hr>
        <hr className="Hr"></hr>
      </div>
      <div className="reducer">
        <h1 className="serviceNum">{curCount}</h1>
        <button className="btn" onClick={() => dispatch(inc())}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch(dec())}>
          Decrement
        </button>
        <button className="btn" onClick={() => dispatch(mul())}>
          Multiply
        </button>
        <button className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProjectTwo;
