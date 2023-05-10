import "./index.css";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "../node_modules/@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <div id="content-container">
        <div id="logo-container">
          <img src={logo} alt="logo" id="logo" />
          <h2 id="text">Her kommer det snart en ny nettside!</h2>
        </div>
        <div id="socials-container">
          <p id="socials-text">
            I mellomtiden kan du følge oss på sosiale medier
          </p>
          <a href="https://www.instagram.com/bokstavmari/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              id="instagram"
              className="icon"
            />
          </a>
          <a href="fb://page/BokstavMari" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              id="facebook"
              className="icon"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
