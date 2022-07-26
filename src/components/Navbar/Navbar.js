import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/adoption/putup">Adopt</Link>
        </li>
        <li>
          <Link to="/petProducts">Pet products</Link>
        </li>
        <li>
          <a href="#">Medical Services</a>
        </li>
        <li>
          <Link to="/findVolunteer">volunteer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
