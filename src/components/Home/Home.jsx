import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import { useSpring, animated as a } from "react-spring";
// import HeroText from "./Text/HeroText";

function Home() {
  const animatedProps = useSpring({
    opacity: 1,
    marginLeft: 20,
    from: { marginLeft: 80, opacity: 0 },
    config: { mass: 3, tension: 150, friction: 5 },
  });

  return (
    <section className="home-container">
      <Navbar />
      <div className="hero-text-container">
        <div className="upper-text">
          <p>Easiest way to find your dream place.</p>
        </div>
        <div className="lower-text">
          <p>
            {" "}
            We can help you find your dream place and get settled as soon as
            possible.
          </p>
        </div>
      </div>
      <a.div className="hero-stats" style={{ ...animatedProps }}>
        <div className="left">
          <p
            style={{
              fontSize: "60px",
              fontFamily: "sans-serif",
              fontWeight: "500%",
              color: "#BFB29B",
            }}
          >
            100+
          </p>
          <br />
          <p
            style={{
              fontFamily: "sans-serif",
              color: "white",
              fontSize: "12px",
            }}
          >
            Happy Clients
          </p>
        </div>
        <div className="right">
          <p
            style={{
              fontSize: "60px",
              fontFamily: "sans-serif",
              fontWeight: "500%",
              color: "#BFB29B",
            }}
          >
            200+
          </p>
          <br />
          <p
            style={{
              fontFamily: "sans-serif",
              color: "white",
              fontSize: "12px",
            }}
          >
            Property Deals
          </p>
        </div>
      </a.div>
    </section>
  );
}

export default Home;
