import React from 'react'
import "./Landing.css"
import LeftSocialMediaIcons from "./LeftSocialMediaIcon"
import DarkWave from '../Waves/DarkWave'
import TypingAnimation from "./TypingAnimation"

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <h1 className="landing__mainText landing__name">Shashi Shankar</h1>
        <div className="typing__animation">
          <TypingAnimation />
        </div>
      </div>
      <hr className="landing__hr" />

      <div className="landing__bottomText">
        <h1 className="landing__mainText">Computer Science</h1>
        <h1 className="landing__mainText">Engineer</h1>
      </div>
    

      <LeftSocialMediaIcons />

      <DarkWave />
    </section>
  )
}

export default Landing
