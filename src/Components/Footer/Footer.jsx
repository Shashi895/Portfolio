import React from "react";
import Logo from "../NavBar/HeaderText";
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";
import SourceCodeLink from "./SourceCodeLink";

function Footer() {
  return (
    <footer className="footer dark">
      <SocialMediaIcons />
      <Logo />
      <p className="footer__copyright">Copyright © 2024 Shashi Shankar</p>
      <SourceCodeLink />
    </footer>
  );
}

export default Footer;
