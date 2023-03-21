import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ProjectFour = (props) => {
  const navigate = useNavigate();
  const meetupStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "600",
      color: isActive ? "white" : "rgb(207, 205, 205)",
    };
  };

  return (
    <>
      <div className="ProFour">
        <span className="PrFourTitle">React MeetUps</span>
        <div className="meetupLinks">
          <NavLink style={meetupStyle} className="MeetUpsLink" to="AllMeetups">
            <span className="MeetUpTag">All Meetups</span>
          </NavLink>
          <NavLink style={meetupStyle} className="MeetUpsLink" to="NewMeetups">
            <span className="MeetUpTag"> Add New Meetups</span>
          </NavLink>
          <NavLink style={meetupStyle} className="MeetUpsLink" to="Favorites">
            <span className="MeetUpTag">My Favorites</span>
          </NavLink>
        </div>
      </div>

      {/* <div className="naviButtons">
        <button className="naviBtn" onClick={props.ToShow}>
          Show NavBar
        </button>
        <button className="naviBtn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div> */}

      <Outlet />
    </>
  );
};

export default ProjectFour;
