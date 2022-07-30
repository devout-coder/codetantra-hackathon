import React from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiX } from "react-icons/bi";
import { useState, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { Link } from "react-router-dom";

const Navbar = ({ whichActive }) => {
  const [shouldShow, setshouldShow] = useState(false);
  useEffect(() => {
    let anim;
    if (shouldShow && anim == null) {
      anim = gsap.from(".slide-bottom", {
        y: "-100%",
        duration: 0.25,
        onComplete: () => (anim = null),
        ease: Power3.easeIn,
      });
    }

    return () => {
      if (anim != null) {
        anim.kill();
      }
    };
  }, [shouldShow]);
  return (
    <div
      className={`dropShadow navbar__container`}
      style={{
        backgroundImage:
          "linear-gradient( 109.6deg,  rgba(3,131,115,1) 21.9%, rgba(0,204,142,1) 80.9% )",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        position: "fixed",
        zIndex: 5,
        width: "100%",
      }}
    >
      <div>
        {/* <Link href="/"> */}
        <a>
          <div
            className="navbar__done_btn"
            style={{
              height: "100%",
              padding: "1rem",
              marginLeft: "8vw",
            }}
          />
        </a>
        {/* </Link> */}
      </div>

      <div
        className="navbar__right_partition"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <div className={`${styles.linksText} navbar__links_superContainer`}>
          <div
            className={`${styles.navbar_links_container} navbar_links_container`}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* <Link to="results"> */}
            <a
              className={
                whichActive != "results" ? styles.test : styles.text__underlined
              }
            >
              <Link to="/petProducts">PET PRODUCTS</Link>
            </a>
            {/* </Link> */}

            {/* <Link href="/courses"> */}
            <a
              className={
                whichActive != "courses" ? styles.test : styles.text__underlined
              }
            >
              <Link to="/services">SERVICES</Link>
            </a>
            {/* </Link> */}
            {/* <Link href="/contact-us"> */}
            <a
              className={
                whichActive != "contactus"
                  ? styles.test
                  : styles.text__underlined
              }
            >
              <Link to="/adoption/adopt">ADOPTION</Link>
            </a>
            {/* </Link> */}
            {/* <Link href="/join-us"> */}
            <a
              className={
                whichActive != "join_us" ? styles.test : styles.text__underlined
              }
            >
              <Link to="/applyVolunteer">VOLUNTEERING</Link>
            </a>
            {/* </Link> */}

            {/* <a className="navbar_smallScreen_freeDemoClass">
              <p
                style={{
                  width: "max-content",

                  color: "white",
                }}
              >
                call now
              </p>
            </a> */}
            <a
            // className={
            //   "navbar__donate_btn "
            //   // whichActive != "join_us" ? styles.test : styles.text__underlined
            // }
            >
              <button>DONATE</button>
            </a>
          </div>
        </div>

        <div className="navbar__menuContainer">
          <GiHamburgerMenu
            className="navbar__gihamMenu "
            onClick={() => setshouldShow(true)}
          />

          {shouldShow && (
            <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
              <BiX
                className="overlay__close"
                onClick={() => setshouldShow(false)}
              />

              <div
                className={`

               navbar__links_container

                navbar_links_container_smallscreen`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a
                  onClick={() => setshouldShow(false)}
                  className={
                    whichActive != "results"
                      ? styles.test
                      : styles.text__underlined
                  }
                >
                  PET PRODUCTS
                </a>

                <a
                  onClick={() => setshouldShow(false)}
                  className={
                    whichActive != "courses"
                      ? styles.test
                      : styles.text__underlined
                  }
                >
                  SERVICES
                </a>

                <a
                  onClick={() => setshouldShow(false)}
                  className={
                    whichActive != "contactus"
                      ? styles.test
                      : styles.text__underlined
                  }
                >
                  ADOPTION
                </a>

                <a
                  onClick={() => setshouldShow(false)}
                  className={
                    whichActive != "join_us"
                      ? styles.test
                      : styles.text__underlined
                  }
                >
                  VOLUNTEERING
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
