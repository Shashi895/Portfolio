import { Link } from "react-router-dom";
import "./ResumeButton.css";

function ResumeButton() {
  return (
    <Link
      
      className="navItem resumeButton"
      to="https://drive.google.com/file/d/1Bjko3dxfvZPLUZhkkIzo_YJ71TC2WcFQ/view?usp=drive_link"
      target="_blank"
    >
      
      <h3>Resume</h3>
    </Link>
  );
}

export default ResumeButton;
