import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Loading from "../../components/Loading/Loading";
import { firebaseApp } from "../../firebase";

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
        navigate("/home");
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
    <div className="landing">
      <button className="getStartedButt" onClick={() => signInGoogle()}>
        Get Started
      </button>
      {loading == true ? <Loading /> : <div></div>}
    </div>
  );
}

export default Landing;
