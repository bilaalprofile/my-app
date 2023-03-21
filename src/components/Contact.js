import React from "react";
import { Link, navLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <span> Contact Me:</span> Bkhan8239@gmail.com, <span>Phone:</span>
        987654321
      </div>
      <div className="contactbtn">
        <Link to="FollowMe">
          <div className="contactField">Enter Your Email</div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;
