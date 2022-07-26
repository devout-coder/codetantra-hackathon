import {
  FormControlLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import * as geofire from "geofire-common";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import Filebase from "react-file-base64";

const PutUpAdoption = () => {
  const lat = 51.5074;
  const lng = 0.1278;
  const hash = geofire.geohashForLocation([lat, lng]);

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState(hash);
  const [isFemale, setIsFemale] = useState(true);
  const [photo, setPhoto] = useState(null);

  const putupForAdoption = async () => {
    try {
      const docRef = await addDoc(collection(db, "adoption_pets"), {
        name: name,
        owner: owner,
        age: age,
        breed: breed,
        location: location,
        gender: isFemale ? "female" : "male",
        photo: photo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="putup-adoption-form">
      <text>pet name</text>
      <div className="putup-adoption-form">
        <div className="field">
          <div className="fieldName">Pet name</div>
          <input
            type={"text"}
            value={name}
            spellCheck="false"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <div className="fieldName">Age</div>
          <input
            type={"number"}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="field">
          <div className="fieldName">Pet Breed</div>
          <input
            type={"text"}
            value={breed}
            spellCheck="false"
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div className="field">
          <div className="fieldName">Owner</div>
          <input
            type={"text"}
            value={owner}
            spellCheck="false"
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
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
          onDone={(
            { base64 } //I was missing the curly brackets which was the issue
          ) => setPhoto({ ...photo, selectedFile: base64 })}
        />
        <button className="loginButton" onClick={putupForAdoption}>
          Put up for Adoption
        </button>
      </div>
    </div>
  );
};

export default PutUpAdoption;
