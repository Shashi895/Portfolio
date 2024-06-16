import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import { ImAirplane } from "react-icons/im";

import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header"><span>Projects</span></h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="\spaceblog.png"
          
          alt="spaceblog"
          width="50%"
          height="auto"
          loading="lazy"
        />

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Spaceblog</h3>
          <p className="project__description project__body">
          Spaceblog is a sophisticated blogging platform for astronomy
            enthusiasts built in React, leveraging backend as a
            service(Appwrite) for secure data storage and user management.
            Designed a responsive user interface using Tailwind CSS, focusing on
            mobile-first principles to improve accessibility and user
            satisfaction
          </p>
          <p className="project__tech project__body">
          ReactJs, TailWind css, JavaScript, AppWrite (backend as a
          service), Router.
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Shashi895/Spaceblog"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            
            <h3 className="project__sourceCodeText">Source Code</h3>

          </a>
          <a
            className="project__sourceCode"
            href="https://github.com/Shashi895/Spaceblog"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <ImAirplane className="project__githubLogo app__links" size={20} />
            
            <h3 className="project__sourceCodeText">App Link</h3>

          </a>
          
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
