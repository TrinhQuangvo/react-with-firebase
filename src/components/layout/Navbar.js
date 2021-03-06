import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

function Navbar(props) {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          FireBase
        </Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
}

export default Navbar;
