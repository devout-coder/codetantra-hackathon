import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./FindVolunteer.css";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import Filebase from "react-file-base64";
import { getAuth } from "firebase/auth";
import InputField from "../../components/InputField/InputField";
import Heading1 from "../../components/Heading1/Heading1";

const FindVolunteer = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [name, setName] = useState("");
  const [desc, setdesc] = useState("");
  // const [desc, setdesc] = useState("");

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
        desc: desc,
        location: getLocation(),
        //location
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <Navbar />
      <div className={`offWhiteBg superContainer`}>
        <div className="formContainer">
          <Heading1 title={"Adopt"} />
          <p
            style={{
              marginBottom: "2rem",
            }}
            className="pTextSmall"
          >
            Fill the following form to find volunteers for your pets
          </p>

          {/* <Link to="/findVolunteer">Find Volunteer</Link>
          <Link to="/applyVolunteer">Apply Volunteer</Link> */}

          {/* <div className="volunteer-form"> */}
          <InputField
            ph={"Title"}
            labelRef={useRef(null)}
            setPostData={setdesc}
            postData={desc}
          />
          <InputField
            ph={"Description"}
            labelRef={useRef(null)}
            setPostData={setdesc}
            postData={desc}
          />
          {/* <div className="field"> */}
          {/* <div className="fieldName">desc required</div>
              <input
                type={"text"}
                value={desc}
                spellCheck="false"
                onChange={(e) => setdesc(e.target.value)}
              />
            </div> */}
          <button
            className="loginButton"
            onClick={volunteer}
            style={{
              marginTop: "1rem",
            }}
          >
            Post the request
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default FindVolunteer;
