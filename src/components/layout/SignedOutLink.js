import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLink(props) {
  return (
    <ul className="right ">
      <li>
        <NavLink to="/new project">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/new project">Login</NavLink>
      </li> 
    </ul>
  );
}

export default SignedOutLink;
