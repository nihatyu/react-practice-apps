import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleShow(window.scrollY > 100 ? true : false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt="Netflix Logo"
        className="nav__logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Nav Avatar"
        className="nav__avatar"
      />
    </div>
  );
};

export default Nav;
