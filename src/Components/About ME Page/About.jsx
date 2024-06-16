import LightWave from "../Waves/LightWave";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <div>
          <h2 className="about__heading">
            <span>About Me</span>
          </h2>
          <p className="about__body">
            👋 Hello! My name is Shashi Shankar and I am a Computer Science -
            Artificial intelligence and Machine learning Graduate from the{" "}
            <span className="about__specialText">
              Haldia Institute of Technology, Haldia
            </span>
            <br />
            <br />
            🏢 I have previously interned at{" "}
            <span className="about__specialText">Wipro</span> in the summer of
            '2023, With roles as a{" "}
            <span className="about__specialText">Web Devlopment</span>
            <br />
            <br />
            💥Currently, I am learning about{" "}
            <span className="about__specialText">Backend</span>
          </p>
        </div>
        <div>
          <h2 className="about__heading">
            <span>Skills</span>
          </h2>
          <div className="about__body">
            <span className="skills__heading">Programming Languages:</span>
            <br />
            <p className="skills__text">Python, C++, JavaScript, SQL</p>
            <br />
            <span className="skills__heading">Frameworks:</span>
            <br />
            <p className="skills__text">
              React, Matplotlib, NumPy, Pandas, Bootstrap, Tensorflow
            </p>
            <br />
            <span className="skills__heading">Technologies:</span>
            <br />
            <p className="skills__text">Git, Node.js, MySQL</p>
            <br />
          </div>
        </div>
      </div>
      <img
        className="about__headshot"
        src="\about_me_img.png"
        alt="Profile Picture"
        width="300"
        height="300"
      />
      {/* connect panding */}
      <LightWave />
    </section>
  );
}

export default About;
