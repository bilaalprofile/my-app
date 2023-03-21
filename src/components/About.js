import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about">My Name is Bilal Khan And I'm A Web Developer</div>
      <Link to={"Goo"}>Click ME</Link>

      <Outlet />
    </div>
  );
};

export default About;
