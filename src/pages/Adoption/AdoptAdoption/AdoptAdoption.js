import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Loading from "../../../components/Loading/Loading";
import ChatWindow from "../../../components/ChatWindow/ChatWindow";
import { Button } from "@material-ui/core";

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
    <div className="pets-adoption-container">
      <div className="pets-adoption-list">
        {pets != null ? (
          <div>
            {pets.map((each) => (
              <Button onClick={() => setChatOpen(true)}>{each.name}</Button>
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      {chatOpen ? (
        <ChatWindow closeChatWindow={() => setChatOpen(false)} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AdoptAdoption;
