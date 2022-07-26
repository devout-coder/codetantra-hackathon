import { useState } from "react";
import gsap, { shuffle } from "gsap";

const InputField = ({
  labelRef,

  setPostData,

  ph,
}) => {
  const [phToTitle, setPhToTitle] = useState(ph);
  const clickedScale = 0.9;
  const normalScale = 1;
  const pushDownBy = "-1.9rem";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        padding: "0 3rem",
      }}
    >
      <p
        ref={labelRef}
        id="temp"
        style={{
          zIndex: "9",
          // textAlign: "center",
          position: "absolute",
          top: "1rem",
          left: "3.5rem",
        }}
        onClick={(e) => {
          if (
            ph ===
            "About You (experience, preferred job role, certifications, etc.)"
          ) {
            setPhToTitle("About You");
          }
          gsap.to(labelRef.current, {
            y: pushDownBy,
            scale: clickedScale,

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
              y: pushDownBy,
              scale: clickedScale,

              duration: 0.1,
            });
          }}
          onBlur={(e) => {
            if (e.target.value == "") {
              gsap.to(labelRef.current, {
                y: "0",
                scale: normalScale,

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
                scale: normalScale,

                duration: 0.1,
              });
            }
          }}
          onClick={(e) => {
            gsap.to(labelRef.current, {
              y: pushDownBy,
              scale: clickedScale,

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

{
  /* <input type="tel" id="phone" name="phone" placeholder="1.2-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br><br>
  <small>Format: 1.2-45-678</small><br><br>
  <input type="submit"></input> */
}
