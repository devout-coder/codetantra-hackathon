import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Loading from "../../components/Loading/Loading";
import { firebaseApp } from "../../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { the_dog } from "../../assets";
import Navbar from "../../components/Navbar/Navbar";

const provider = new GoogleAuthProvider();

function Landing() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(null);

  const signInGoogle = () => {
    setLoading(true);
    const auth = getAuth(firebaseApp);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setLoading(false);
        navigate("/adoption/putup");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <Navbar />
      <div className="superContainer offWhiteBg">
        {/* <div className="mainContainer">
          
        </div> */}
        {/* <img src={the_dog} alt="" /> */}
        <div
          className="landing_container roundCorner dropShadow flexCenter"
          style={{
            overflow: "hidden",
            marginTop: "3rem",
            width: "calc(100% - 40rem)",
            // margin: "0 rem",
          }}
        >
          <div
            className="landing_upperHalf flexCenter"
            style={{
              position: "relative",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              // width: "max-content",
            }}
          >
            <div
              className="flexCenter"
              style={{
                position: "absolute",
                zIndex: 99,
                // width: "100%",
                height: "100%",
                bottom: 0,
                right: 0,
              }}
            >
              <img
                src={the_dog}
                style={{
                  objectFit: "contain",
                  left: 0,
                  bottom: 0,
                  // width: "100%",
                  height: "100%",
                  // scale: 1.3,
                }}
              />
            </div>
            <div
              className="flexCenter"
              style={{
                position: "relative",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: "4rem",
              }}
            >
              <p className="fosterPet">FOSTER A PET</p>
              <p className="saveALife">SAVE A LIFE</p>
              <p
                style={{
                  textAlign: "left",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
              >
                APPROXIMATELY 2.7 MILLION DOGS AND CATS <br></br>ARE KILLED{" "}
                EVERY YEAR BECAUSE THEY <br></br>AREN'T ABLE TO FIND A FOREVER
                HOME.
              </p>
            </div>
          </div>
          <div
            className="lowerHalf flexCenter"
            style={{ background: "#E1C6A8", width: "100%" }}
          >
            <button className="getStartedButt" onClick={() => signInGoogle()}>
              Get Started
            </button>
            {loading == true ? <Loading /> : <div></div>}
            {/* <div className="roundCorner flexCenter" style={{}}>
              <div
                className="flexCenter"
                style={{
                  overflow: "hidden",
                  borderRadius: "50%",
                  height: "5rem",
                  width: "5rem",
                }}
              >
                <img src={the_dog} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
