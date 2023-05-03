import React, { useEffect } from "react";
import "./Team.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
// import { useSpring, animated as a } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  // const animatedProps = useSpring({
  //   opacity: 1,
  //   marginTop: 5,
  //   from: { marginTop: -200, opacity: 0 },
  //   config: { mass: 10, tension: 10, friction: 1 },
  // });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="team-container">
      <h1>Our Proud Team</h1>
      <div className="hero-image">
        <div className="upper-image" data-aos="fade-right">
          <img src={img1} alt="img1" />
          <p style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            Jasbir Jaglan
          </p>
          <p style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            14+ years of experience
          </p>
        </div>
        <div className="lower-image">
          <div className="left-img" data-aos="fade-right">
            <img src={img2} alt="img2" />
            <p style={{ textAlign: "center", fontFamily: "sans-serif" }}>
              Jasbir Jaglan
            </p>
            <p style={{ textAlign: "center", fontFamily: "sans-serif" }}>
              14+ years of experience
            </p>
          </div>

          <div className="right-img" data-aos="fade-right">
            <img src={img3} alt="img3" />
            <p style={{ textAlign: "center", fontFamily: "sans-serif" }}>
              Jasbir Jaglan
            </p>
            <p style={{ textAlign: "center", fontFamily: "sans-serif" }}>
              14+ years of experience
            </p>
          </div>
        </div>
      </div>
      ;
    </section>
  );
}

export default Team;
