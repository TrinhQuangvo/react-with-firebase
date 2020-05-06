import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLink(props) {
  return (
    <ul className="right ">
      <li>
        <NavLink to="/new project">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/new project">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/new project" className="btn btn-floating pink lighten-1">LL</NavLink>
      </li>
    </ul>
  );
}

export default SignedInLink;
