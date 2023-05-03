import React from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import { useSpring, animated as a } from "react-spring";
function Navbar() {
  const animatedProps = useSpring({
    opacity: 1,
    marginLeft: 30,
    from: { marginLeft: 200, opacity: 0 },
    config: { mass: 1, tension: 30, friction: 10 },
  });

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="tabs-container">
        <ul>
          <a.li style={{ ...animatedProps }}>Home</a.li>
          <a.li style={{ ...animatedProps }}>Testimonials</a.li>
          <a.li style={{ ...animatedProps }}>Contact</a.li>
          <a.li style={{ ...animatedProps }}></a.li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
