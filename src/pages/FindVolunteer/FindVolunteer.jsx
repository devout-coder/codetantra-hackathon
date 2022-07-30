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
import { useNavigate } from "react-router-dom";

const FindVolunteer = () => {
  let navigate = useNavigate();
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
      <Navbar whichActive={"VOLUNTEERING"} />
      <div className={`offWhiteBg superContainer`}>
        <div className="formContainer">
          <div className="services__subTabsContainer flexCenter">
            <div
              onClick={() => {
                navigate("/applyVolunteer");
              }}
              className={` services__subTab`}
            >
              <p>Volunteer for Pet Care Jobs</p>
            </div>
            <div className={`services__subTab services__subTab__active`}>
              <p>Find Volunteers</p>
            </div>
          </div>
          <Heading1 title={"Find Volunteers"} />
          <p
            style={{
              marginBottom: "2rem",
            }}
            className="pTextSmall"
          >
            Fill in the details of the pet's needs to find volunteers for the
            same
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
