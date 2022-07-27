import {
  FormControlLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import * as geofire from "geofire-common";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import Filebase from "react-file-base64";

import { useRef, useState } from "react";
import Heading1 from "../../../components/Heading1/Heading1";
import InputField from "../../../components/InputField/InputField";
import { useNavigate } from "react-router-dom";

const PutUpAdoption = () => {
  let navigate = useNavigate();
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

  const [name, setname] = useState("");
  const [owner, setowner] = useState("");
  const [age, setage] = useState("");
  const [breed, setbreed] = useState("");
  const [isFemale, setIsFemale] = useState(true);
  const [photo, setPhoto] = useState(null);

  const putupForAdoption = async () => {
    try {
      const docRef = await addDoc(collection(db, "adoption_pets"), {
        name: name,
        owner: owner,
        age: age,
        breed: breed,
        location: getLocation(),
        gender: isFemale ? "female" : "male",
        photo: photo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className={`offWhiteBg superContainer`}>
      <div className="formContainer">
        <div className="services__subTabsContainer flexCenter">
          <div
            className={` services__subTab`}
            onClick={() => {
              navigate("/adoption/adopt");
            }}
          >
            <p>Adopt</p>
          </div>
          <div className={`services__subTab services__subTab__active`}>
            <p>Post for Adoption</p>
          </div>
        </div>
        <Heading1 title={"Adopt"} />
        <p
          style={{
            marginBottom: "2rem",
          }}
          className="pTextSmall"
        >
          Fill the following form to apply for adoption
        </p>
        <InputField
          ph={"Name"}
          labelRef={useRef(null)}
          setPostData={setname}
          postData={name}
        />
        <InputField
          ph={"Age"}
          labelRef={useRef(null)}
          setPostData={setage}
          postData={age}
        />
        <InputField
          ph={"Breed"}
          labelRef={useRef(null)}
          setPostData={setbreed}
          postData={breed}
        />
        <InputField
          ph={"Owner Name"}
          labelRef={useRef(null)}
          setPostData={setowner}
          postData={owner}
        />
        <text>Female</text>
        <Radio
          checked={isFemale}
          onChange={(e) => setIsFemale(true)}
          value="Female"
          name="radio-buttons"
          inputProps={{ "aria-label": "Female" }}
        />
        <text>Male</text>
        <Radio
          checked={!isFemale}
          onChange={(e) => setIsFemale(false)}
          value="Male"
          name="radio-buttons"
          inputProps={{ "aria-label": "Male" }}
        />
        <Filebase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPhoto({ ...photo, selectedFile: base64 })}
        />
        <button className="loginButton" onClick={putupForAdoption}>
          Put up for Adoption
        </button>
      </div>
    </div>
  );
};

export default PutUpAdoption;
