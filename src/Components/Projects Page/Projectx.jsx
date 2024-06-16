import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectLight.css";
import "./Projectx.css";

function Projectx({ id }) {
  return (
    <article id={id} className="projectx dark">
      <h2 className="projectx-header">
        <span>More Projects</span>
      </h2>
      <div className="projectx__main">
        <div className="projectx__container">
          <a
            href="https://currencyconverters123.netlify.app/
"
            className="projectx__link"
            target="_blank"
          >
            <img
              className="projectx__image project__specialMobileImage"
              src="\currency.png"
              alt="Currency app"
              width="30%"
              height="auto"
              loading="lazy"
            />
            <div class="hover-text">Currency Converter </div>
          </a>
        </div>
        <div className="projectx__container">
          <a
            href=" https://passwordgens123.netlify.app/"
            target="_blank"
            className="projectx__link"
          >
            <img
              className="projectx__image project__specialMobileImage"
              src="\password.png"
              alt="password "
              width="30%"
              height="auto"
              loading="lazy"
            />
            <div class="hover-text">Password Generator</div>
          </a>
        </div>
        <div className="projectx__container">
          <a
            href="https://reactpapps12.netlify.app/
"
            target="_blank"
            className="projectx__link"
          >
            <img
              className="projectx__image project__specialMobileImage"
              src="\router.png"
              alt="Router app"
              width="30%"
              height="auto"
              loading="lazy"
            />
            <div class="hover-text">Router Project</div>
          </a>
        </div>
      </div>
      <LightWave />
    </article>
  );
}

export default Projectx;
