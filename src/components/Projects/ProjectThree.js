import Todos from "../Todos";
import React from "react";

const ProjectThree = () => {
  return (
    <div className="BoxThree">
      <h1 className="todos">My todos</h1>
      <Todos name="Bilal Khan" />
      <Todos name="Tahir khan" />
      <Todos name="Asif Khan" />
      <Todos name="Tasir Khan" />
    </div>
  );
};

export default ProjectThree;
