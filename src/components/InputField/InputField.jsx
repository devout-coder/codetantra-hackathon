import { useState } from "react";
import gsap, { shuffle } from "gsap";

const InputField = ({
  labelRef,

  setPostData,

  ph,
}) => {
  const [phToTitle, setPhToTitle] = useState(ph);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        marginBottom: "-1rem",
      }}
    >
      <p
        ref={labelRef}
        id="temp"
        style={{
          zIndex: "9",
          // textAlign: "center",
          position: "absolute",
          top: "1.4rem",
          left: "2.5rem",
        }}
        onClick={(e) => {
          if (
            ph ===
            "About You (experience, preferred job role, certifications, etc.)"
          ) {
            setPhToTitle("About You");
          }
          gsap.to(labelRef.current, {
            y: "-2.5rem",
            scale: "1.2",

            duration: 0.1,
          });
          e.target.nextElementSibling.focus();
          // document.getElementsByTagName("input")[0].focus();
        }}
      >
        {phToTitle}
      </p>

      {ph ===
      "About You (experience, preferred job role, certifications, etc.)" ? (
        <textarea
          onChange={(e) => {
            setPostData(e.target.value);
          }}
          onClick={(e) => {
            setPhToTitle("About You");
            gsap.to(labelRef.current, {
              y: "-2.5rem",
              scale: "1.2",

              duration: 0.1,
            });
          }}
          onBlur={(e) => {
            if (e.target.value == "") {
              gsap.to(labelRef.current, {
                y: "0",
                scale: "1",

                duration: 0.1,
                onComplete: () => {
                  setPhToTitle(
                    "About You (experience, preferred job role, certifications, etc.)"
                  );
                },
              });
              // .onComplete(() => {
              //   ;
              // });
            }
          }}
          rows={"5"}
          style={{ resize: "none" }}

          // style={{ maxWidth: "92%", marginRight: "4rem" }}
        />
      ) : (
        <input
          onBlur={(e) => {
            if (e.target.value == "") {
              console.log("reversed");

              gsap.to(labelRef.current, {
                y: "0",
                scale: "1",

                duration: 0.1,
              });
            }
          }}
          onClick={(e) => {
            gsap.to(labelRef.current, {
              y: "-2.5rem",
              scale: "1.2",

              duration: 0.1,
            });
          }}
          onChange={(e) => {
            setPostData(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default InputField;
