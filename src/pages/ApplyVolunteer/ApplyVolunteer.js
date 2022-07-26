import { Button, IconButton } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import { db } from "../../firebase";
import "./ApplyVolunteer.css";

const ApplyVolunteer = () => {
  const [volunteers, setVolunteers] = useState(null);


  const fetchVolunteersData = async () => {
    const querySnapshot = await getDocs(collection(db, "volunteers"));
    let allPets = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let eachDict = {
        name: data.name,
        service: data.service,
      };
      allPets.push(eachDict);
    });
    setVolunteers(allPets);
  };

  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    fetchVolunteersData();
  }, []);

  return (
    <div className="applyVolunteerContainer">
      <Navbar />
      <Link to="/findVolunteer">Find Volunteer</Link>
      <Link to="/applyVolunteer">Apply Volunteer</Link>

      <div className="volunteer-list">
        {volunteers != null ? (
          <div>
            {volunteers.map((each) => (
              <div>
                <span className="volunteer-name">{each.name}</span>
                <span className="volunteer-service">{each.service}</span>
                <IconButton onClick={() => setChatOpen(true)}>
                  <Chat />
                </IconButton>
              </div>
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      {chatOpen ? (
        <ChatWindow
          which="volunteer"
          closeChatWindow={() => setChatOpen(false)}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ApplyVolunteer;
