import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./FindVolunteer.css";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import Filebase from "react-file-base64";
import { getAuth } from "firebase/auth";

const FindVolunteer = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let demoArr = [];
    demoArr.push(position.coords.latitude);
    demoArr.push(position.coords.longitude);
    console.log(demoArr);
    return demoArr;
  }

  const volunteer = async () => {
    try {
      const docRef = await addDoc(collection(db, "volunteers"), {
        name: user,
        service: service,
        location: getLocation(),
        //location
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="findVolunteerContainer">
      <Navbar />
      <Link to="/findVolunteer">Find Volunteer</Link>
      <Link to="/applyVolunteer">Apply Volunteer</Link>

      <div className="volunteer-form">
        <div className="field">
          <div className="fieldName">Service required</div>
          <input
            type={"text"}
            value={service}
            spellCheck="false"
            onChange={(e) => setService(e.target.value)}
          />
        </div>
        <button className="loginButton" onClick={volunteer}>
          Post the request
        </button>
      </div>
    </div>
  );
};

export default FindVolunteer;
