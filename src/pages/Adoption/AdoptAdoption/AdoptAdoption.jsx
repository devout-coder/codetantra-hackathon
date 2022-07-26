import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Loading from "../../../components/Loading/Loading";
import ChatWindow from "../../../components/ChatWindow/ChatWindow";
import { Button } from "@material-ui/core";
import Heading1 from "../../../components/Heading1/Heading1";

export const PetsCard = ({ onclick, pet }) => {
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
          src={pet.photo}
          alt=""
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

const AdoptAdoption = () => {
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
        <Heading1 title={"Pets Ready to Find a Home"} />
        <div
          className="adoptAdopt__petsCardContainer flexCenter"
          style={{ flexDirection: "row" }}
        >
          {pets != null ? (
            pets.map((each) => (
              <PetsCard pet={each} onclick={() => setChatOpen(true)} />
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
