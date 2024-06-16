import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";
import { ImAirplane } from "react-icons/im";
function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Work Balanced Website
          </h3>
          <p className="project__description project__body">
            This Work Balanced app is a highly efficient and user-friendly web
            application that helps users keep track of their daily tasks. It is
            built using the popular React.js library.<br></br>
            <br /> With this app, users can create, edit, and delete tasks on
            their to-do list, and mark them as completed when they are done.{" "}
            <br></br>
            <br />
            One of the key features of the app is its use of local storage to
            store the notes. This means that the app can remember the user's
            to-do list .
          </p>
          <p className="project__tech project__body">
            ReactJs, TailWind css, JavaScript, Local Storage.
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/Shashi895/TodoList"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
            srcset="public\Image\Todolist.pngg 750w, public\Image\Todolist.png 1468w"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCodeDark app__links"
            href="https://todolistapps123.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <ImAirplane  className="project__githubLogo" size={20} />
            <h3 className="project__sourceCodeText">App Link</h3>
          </a>
          
        </div>
        
          <img
            className="project__image project__imageDark"
            src="\Todolist.png"
            sizes="50vw"
            alt="Todolist"
            width="50%"
            height="auto"
            loading="lazy"
          />
        
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
