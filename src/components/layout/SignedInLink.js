import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLink(props) {
  return (
    <ul className="right ">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/signout">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">LL</NavLink>
      </li>
    </ul>
  );
}

export default SignedInLink;
