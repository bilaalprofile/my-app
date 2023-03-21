import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HeaderTwo = (props) => {
  return (
    <>
      <div className="sideNav">
        <NavLink className="navTwo" to="/Projects/ProjectOne">
          Project One
        </NavLink>
        <NavLink className="navTwo" to="/Projects/ProjectTwo">
          Project Two
        </NavLink>
        <NavLink className="navTwo" to="/Projects/ProjectThree">
          Project Three
        </NavLink>
        <NavLink className="navTwo" to="/Projects/ProjectFour">
          <span onClick={props.ToHide}>Project Four</span>
        </NavLink>
        <NavLink className="navTwo" to="/Projects/ProjectFive">
          Project Five
        </NavLink>
        <NavLink className="navTwo" to="/Projects/ProjectSix">
          Project Six
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default HeaderTwo;
