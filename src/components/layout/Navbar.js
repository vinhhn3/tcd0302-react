import React from "react";

const Navbar = ({ title }) => {
  // const title = props.title;
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
    </div>
  );
};

export default Navbar;
