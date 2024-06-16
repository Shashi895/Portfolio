import React from "react";
import { useRef , useEffect } from "react";
import Typed from "typed.js";

function TypingAnimation() {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "ML Engineer",
        "Web Developer",
        "Coder"
      ],
      typeSpeed: 34,
      backSpeed: 25,
      backDelay: 500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <span
        id="type-it"
        className="subtitle subtitle-typed"
        ref={element}
      ></span>
    </>
  );
}

export default TypingAnimation;
