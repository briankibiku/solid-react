import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

function NavBar() {
  return (
    <>
      <h4>Solid React</h4>
      <Link to="/" className="navlinks" style={{ padding: "10px" }}>
        Home
      </Link>
      <Link to="/details" className="navlinks" style={{ padding: "10px" }}>
        Details
      </Link>
      <Link to="/about" className="navlinks" style={{ padding: "10px" }}>
        About
      </Link>
      <Link to="/temp" className="navlinks" style={{ padding: "10px" }}>
        Temperature
      </Link>
      <Link to="/calculator" className="navlinks" style={{ padding: "10px" }}>
        Calculator
      </Link>
    </>
  );
}

export default NavBar;
