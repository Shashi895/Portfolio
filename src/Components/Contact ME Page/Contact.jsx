import DarkWave from "../Waves/DarkWave";
import "./Contact.css"
import { FaLinkedin, FaMailBulk,FaWhatsapp } from "react-icons/fa";

export default function Contact(){
  return(
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading"><span>Contact Me</span></h2>
        <div className="contact__option">
          <FaMailBulk
          className="contact__logo" size={45}/>
          <a href="mailto:shashishankar502@gmail.com" className="linktosite">
            <span>shashishankar502@gmail.com</span>
          </a>
        </div>
        <div
        className="contact__option"
        ><FaLinkedin className="contact__logo" size={45}/>
        <a href="https://www.linkedin.com/in/shashi-shankar-8b4aa2290/" target="_blank" className="linktosite"><span >Shashi Shankar</span></a>
        </div>
        <div
        className="contact__option"
        ><FaWhatsapp className="contact__logo" size={45}/>
        <a href="https://wa.me/6299963136" target="_blank" className="linktosite"><span >Contact Me</span></a>
        </div>
      </div>
      <DarkWave/>
    </section>
  )
}