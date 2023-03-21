import React from "react";

import { Link, Outlet } from "react-router-dom";
const More = (props) => {
  return (
    <div className="more">
      <div className="MoreClass">
        <Link className="moreEdit" to={"/HeaderTwo"}>
          <span>More Projects</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default More;
