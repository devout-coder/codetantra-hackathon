import React, { useState } from "react";
import Heading1 from "../../components/Heading1/Heading1";
import Navbar from "../../components/Navbar/Navbar";
import { FiPhoneCall } from "react-icons/fi";
import { FaDirections } from "react-icons/fa";

export const LocDetailsCard = ({ name, add, number, dist }) => {
  return (
    <div className="locDetailsCardContainer flexCenter">
      <div className="locDetailsCard__container roundCorner flexCenter dropShadow">
        <div className="locDetailsCard__left flexCenter">
          <p>
            {dist}Km<br></br>away
          </p>
        </div>
        <div className="locDetailsCard__middle flexCenter">
          <p className="pText">{name}</p>
          <p className="pTextSmall">Address: {add} </p>
          <p className="pTextSmall">Phone Number: {number}</p>
        </div>
        <div className="locDetailsCard__right flexCenter">
          <div className="flexCenter iconContainer">
            <FiPhoneCall fontSize={"2rem"} />
            <p>Call Now</p>
          </div>
          <div className="flexCenter iconContainer">
            <FaDirections fontSize={"2rem"} />
            <p>Directions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedTab, setselectedTab] = useState("vet");
  return (
    <div>
      <Navbar whichActive={"services"} />
      <div className="superContainer offWhiteBg">
        <div className="mainContainer">
          <div className="services__subTabsContainer flexCenter">
            <div
              className={`services__subTab ${
                selectedTab == "vet" ? "services__subTab__active" : ""
              }`}
              onClick={() => {
                let temp = selectedTab != "vet" ? "vet" : "med";
                setselectedTab(temp);

                console.log(selectedTab);
                console.log("selected");
              }}
            >
              <p>Veterinarians</p>
            </div>
            <div
              onClick={() => {
                let temp = selectedTab != "vet" ? "vet" : "med";
                setselectedTab(temp);

                console.log(selectedTab);
                console.log("selected");
              }}
              className={`services__subTab ${
                selectedTab != "vet" ? "services__subTab__active" : ""
              }`}
            >
              <p>Medical Shops</p>
            </div>
          </div>
          {selectedTab == "vet" ? (
            <div>
              <div>
                <Heading1 title={"Veterinarians"} />
              </div>
              <LocDetailsCard
                name={"SuperPets"}
                dist={"0.7"}
                add={
                  "Chaman Commercial, Opp Andheri Recreation Club, Andheri West, Mumbai - 400058, Near Azad Nagar Metro Station"
                }
                number={"+91 343 5345 XXX"}
              />
              <LocDetailsCard
                name={"Petie"}
                dist={"0.4"}
                add={
                  "Chandansar Park, Opp Andheri Recreation Club, Andheri West, Mumbai - 400058, Near Azad Nagar Metro Station"
                }
                number={"+91 678 5345 XXX"}
              />
            </div>
          ) : (
            <div>
              <Heading1 title={"Medical Shops"} />
              <LocDetailsCard
                name={"Dog Medicine"}
                dist={"0.7"}
                add={
                  "Chaman Commercial, Opp Andheri Recreation Club, Andheri West, Mumbai - 400058, Near Azad Nagar Metro Station"
                }
                number={"+91 343 5345 XXX"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
