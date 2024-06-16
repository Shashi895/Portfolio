import React from "react";
import "./SourceCodeLink.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
function SourceCodeLink() {
  return (
    <a
      className="sourceCodeLink"
      href="https://github.com/Shashi895"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="=Website GitHub Repository"
    >
      <FaGithub className="sourceCodeLink__github" size={25} />
      <h3 className="">Check Out The Source Code</h3>
      <FaExternalLinkAlt className="sourceCodeLink__externalLink" />
    </a>
  );
}

export default SourceCodeLink;
