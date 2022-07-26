import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a class="active" href="#adoption">
            Adoption
          </a>
        </li>
        <li>
          <a href="#">Pet products</a>
        </li>
        <li>
          <a href="#">Medical Services</a>
        </li>
        <li>
          <a href="#">Volunteer services</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
