import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Adoption.css";

function Adoption() {
  return (
    <div className="home-container">
      <Navbar />
      <Link to="putup">Put up for adoption</Link>
      <Link to="adopt">Adopt</Link>
      <Outlet />
    </div>
  );
}

export default Adoption;
