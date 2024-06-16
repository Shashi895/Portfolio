import React from 'react'
import { HashLink } from "react-router-hash-link";

function HeaderText({ clicked, setClicked }) {
  return (
    <div className="header__text">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <h1 className="header_text__title">Shashi<span className="dot_header"></span></h1>
      </HashLink>
    </div>
  );
}

export default HeaderText;
