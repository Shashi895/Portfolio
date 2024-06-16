import React from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import "./MenuIcon.css";

function MenuIcon({ clicked, setClicked }) {
  return (
    <div className="menuIcon" onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <FaTimes className="menuIcon__icon" size={30} />
      ) : (
        <FaBars className="menuIcon__icon" size={30} />
      )}
    </div>
  );
}

export default MenuIcon;
