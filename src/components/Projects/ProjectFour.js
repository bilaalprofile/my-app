import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import FavoriteContext from "../../contextStore/FavoriteContext";
import { useContext } from "react";

const ProjectFour = (props) => {
  const navigate = useNavigate();
  const meetupStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "600",
      color: isActive ? "white" : "rgb(207, 205, 205)",
    };
  };
  const FavoriteCtx = useContext(FavoriteContext);

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
            <span className="MeetUpTag">
              My Favorites
              <span className="favCount">{FavoriteCtx.totalfavorites}</span>
            </span>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default ProjectFour;
