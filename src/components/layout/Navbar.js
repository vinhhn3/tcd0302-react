import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  // const title = props.title;
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
