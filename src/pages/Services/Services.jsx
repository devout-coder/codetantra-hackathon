import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import Heading1 from "../../components/Heading1/Heading1";

import { FiPhoneCall } from "react-icons/fi";

import { FaDirections } from "react-icons/fa";

// import React from 'react'

export const LocDetailsCard = ({ dist, name, loc, phone }) => {
  return (
    <div
      className="locDetailsCard__container roundCorner flexCenter"
      style={{ overflow: "hidden", flexDirection: "row", width: "100%" }}
    >
      <div className="locDetailsCard__left flexCenter">
        <p
          style={{
            padding: "0 2rem",
          }}
        >
          {dist} away
        </p>
      </div>

      <div className="locDetailsCard__middle flexCenter">
        <p className="pText">{name}</p>
        <p className="pTextSmall">Address: {loc}</p>
        <p className="pTextSmall">Phone Number: {phone}</p>
      </div>
      <div
        className="locDetailsCard__right flexCenter"
        style={{
          flexDirection: "row",
        }}
      >
        <div
          className="flexCenter"
          style={{ justifyContent: "flex-end", height: "100%" }}
        >
          <FiPhoneCall fontSize={"1.5rem"} />
          <p
            style={{
              margin: 0,
              padding: 0,
              width: "max-content",
              margin: "8px 0",
            }}
          >
            Call Now
          </p>
        </div>

        <div
          className="flexCenter"
          style={{ justifyContent: "flex-end", height: "100%" }}
        >
          <FaDirections fontSize={"1.5rem"} />

          <p style={{ margin: "8px 1rem", padding: 0, width: "max-content" }}>
            Directions
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedTab, setSelectedTab] = useState("vet");
  function changeSelected() {
    console.log("in vet select");
    let temp = selectedTab == "vet" ? "med" : "vet";
    setSelectedTab(temp);
  }
  return (
    <div>
      <Navbar whichActive={"services"} />
      <div className="superContainer offWhiteBg">
        <div className="mainContainer">
          <div className="services__subTabsContainer flexCenter">
            <div
              className={`services__subTab ${
                selectedTab == "vet" && "services__subTab__active"
              }`}
              onClick={changeSelected}
            >
              <p>Veterinarians</p>
            </div>
            <div
              className={`services__subTab ${
                selectedTab != "vet" && "services__subTab__active"
              }`}
              onClick={changeSelected}
            >
              <p>Medical Shops</p>
            </div>
          </div>
          {selectedTab == "vet" ? (
            <div>
              <Heading1 title="Veterinarians" />
              <div className="locDetailsCardContainer flexCenter">
                <LocDetailsCard dist={0.7} name={"SuperPets"} />
                <LocDetailsCard />
              </div>
            </div>
          ) : (
            <Heading1 title="Medical Shops" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
