import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { ImAirplane } from "react-icons/im";


function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="\stockprice.png"
          // srcset="public\Image\stockprice.png 750w, public\Image\stockprice.png 1468w"
          sizes="50vw"
          alt="stockprice"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Stock Price Prediction</h3>
          <p className="project__description project__body">
          Stock Price Prediction using machine learning algorithm helps you discover the future value of company stock and other financial assets traded on an exchange. The entire idea of predicting stock prices is to gain significant profits. Predicting how the stock market will perform is a hard task to do. There are other factors involved in the prediction, such as physical and psychological factors, rational and irrational behavior, and so on. All these factors combine to make share prices dynamic and volatile. This makes it very difficult to predict stock prices with high accuracy <br /><br />use a Long Short Term Memory Network (LSTM) for building your model to predict the stock prices.
          </p>
          <p className="project__tech project__body">
            &gt; Assistants API · Python · Streamlit · OPENAI API · News API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Shashi895/Stock-Price-Prediction"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://stock-prediction-flutter.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=app_link"
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

export default Project3;
