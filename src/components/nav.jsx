import React from "react";
//stateless function component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill secondary">{totalCounters}</span>
      </span>
    </nav>
  );
};

export default Navbar;
