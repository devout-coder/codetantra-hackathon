import { Button, IconButton } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Heading1 from "../../components/Heading1/Heading1";
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
        title: data.title,
        desc: data.desc,
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
    <div>
      <Navbar />
      <div className={`offWhiteBg superContainer`}>
        <div className="formContainer">
          <Heading1 title={"Volunteer for Pet Care Jobs"} />
          {/* // <div className="applyVolunteerContainer">
    //   <Navbar />
    //   <Link to="/findVolunteer">Find Volunteer</Link>
    //   <Link to="/applyVolunteer">Apply Volunteer</Link> */}

          <div className="volunteer-list" style={{ marginTop: "2rem" }}>
            {volunteers != null ? (
              <div>
                {volunteers.map((each) => (
                  <div
                    className="choreCard roundCorner flexCenter dropShadow"
                    style={{
                      marginBottom: "1rem",
                      alignItems: "flex-start",
                      padding: "0.5rem 2rem",
                      position: "relative",
                    }}
                  >
                    <p
                      className="pText"
                      style={{
                        textAlign: "left",
                      }}
                    >
                      {each.title}
                    </p>
                    <p
                      className="pTextSmall"
                      style={{
                        textAlign: "left",
                      }}
                    >
                      {each.desc}
                    </p>
                    <div>
                      <div
                        className="flexCenter"
                        style={{ flexDirection: "row" }}
                      >
                        <IconButton onClick={() => setChatOpen(true)}>
                          <Chat />
                        </IconButton>
                        <p style={{ marginRight: "1rem" }}>Contact Owner</p>

                        <p>#{each.service}</p>
                      </div>
                    </div>
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
      </div>
      //{" "}
    </div>
  );
};

export default ApplyVolunteer;
