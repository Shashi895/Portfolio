import React from "react";
import "./LeftSocialMediaIcon.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function LeftSocialMediaIcon() {
  return (
    <div className="leftSocialMediaIcons">
      <hr className="leftSocialMediaIcons__mobileLeftBar mobile__hr" />
      <a
        href="https://github.com/Shashi895"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my GitHub"
      >
        <FaGithub className="leftSocialMediaIcons__github icon" size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/shashi-shankar-8b4aa2290/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Linkedin"
      >
        <FaLinkedin className="leftSocialMediaIcons__linkedin icon" size={30} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Instagram"
      >
        <FaInstagram
          className="leftSocialMediaIcons__instagram icon"
          size={30}
        />
      </a>
      <a
        href="https://leetcode.com/u/user0200gs/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my leetcode"
      >
        <SiLeetcode
          className="leftSocialMediaIcons__leetcode icon"
          size={30}
        />
      </a>
      <div className="leftSocialMediaIcons__verticalBar" />
      <hr className="leftSocialMediaIcons__mobileRightBar mobile__hr" />
    </div>
  );
}

export default LeftSocialMediaIcon;
