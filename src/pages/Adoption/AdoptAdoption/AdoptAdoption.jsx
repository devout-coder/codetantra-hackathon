import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Loading from "../../../components/Loading/Loading";
import ChatWindow from "../../../components/ChatWindow/ChatWindow";
// import { Button } from "@material-ui/core";
import Heading1 from "../../../components/Heading1/Heading1";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button, IconButton } from "@material-ui/core";
import { Chat } from "@material-ui/icons";

export const PetsCard = ({ onclick, pet, setChatOpen }) => {
  let navigate = useNavigate();
  return (
    <div
      className="adoptAdopt__petsCard roundCorner dropShadow"
      style={{ overflow: "hidden" }}
    >
      <div
        className="adoptAdopt__petsCard_top flexCenter"
        style={{
          position: "absolute",
          // background: "white",
          zIndex: 90,
          width: "100%",
          height: "64px",
          bottom: 0,
        }}
      >
        <p> {pet.name}</p>
        <div className="flexCenter" style={{ flexDirection: "row" }}>
          <IconButton onClick={() => setChatOpen(true)}>
            <Chat />
          </IconButton>
          <p style={{ marginRight: "1rem" }}>Contact Owner</p>
        </div>
      </div>

      <div
        className="adoptAdopt__petsCard_bottom flexCenter"
        style={{
          position: "absolute",
          // background: "blue",
          zIndex: 89,
          // width: "100vw",
          // height: "100vh",
        }}
      >
        <img
          src={
            pet.photo.selectedFile != undefined
              ? pet.photo.selectedFile
              : pet.photo
          }
          alt=""
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        {/* <img
          src={pet.photo}
          alt=""
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        /> */}
      </div>
    </div>
  );
};

const AdoptAdoption = () => {
  let navigate = useNavigate();
  const [pets, setPets] = useState(null);
  const fetchPetsData = async () => {
    const querySnapshot = await getDocs(collection(db, "adoption_pets"));
    let allPets = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let eachDict = {
        name: data.name,
        age: data.age,
        breed: data.breed,
        gender: data.gender,
        location: data.location,
        owner: data.owner,
        photo: data.photo,
      };
      allPets.push(eachDict);
    });
    setPets(allPets);
  };

  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    fetchPetsData();
  }, []);

  return (
    <div className={`offWhiteBg superContainer`}>
      <div className="mainContainer">
        <div className="services__subTabsContainer flexCenter">
          <div className={`services__subTab__active services__subTab`}>
            <p>Adopt</p>
          </div>
          <div
            onClick={() => {
              navigate("/adoption/putup");
            }}
            className={`services__subTab`}
          >
            <p>Post for Adoption</p>
          </div>
        </div>

        <Heading1 title={"Pets Ready to Find a Home"} />
        <div
          className="adoptAdopt__petsCardContainer flexCenter"
          style={{ flexDirection: "row" }}
        >
          {pets != null ? (
            pets.map((each) => (
              <PetsCard
                setChatOpen={setChatOpen}
                pet={each}
                onclick={() => setChatOpen(true)}
              />
            ))
          ) : (
            <Loading />
          )}

          {/* {pets.map((each) => (
            <PetsCard onclick={() => setChatOpen(true)} />
          ))} */}
        </div>

        {/* <div className="pets-adoption-container">
          <div className="pets-adoption-list">
            {pets != null ? (
              <div>
                {pets.map((each) => (
                  <div>
                    <PetsCard />
                    <Button onClick={() => setChatOpen(true)}>
                      {each.name}
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </div>
          {chatOpen ? (
            <ChatWindow
              which="adoption"
              closeChatWindow={() => setChatOpen(false)}
            />
          ) : (
            <div></div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default AdoptAdoption;
