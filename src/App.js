import "./App.css";
import darkLogo from "./assets/logo-dark.svg";
import lightLogo from "./assets/logo-light.svg";
import iconFacebook from "./assets/icon-facebook.svg";
import iconInstagram from "./assets/icon-instagram.svg";
import iconTwitter from "./assets/icon-twitter.svg";

function App() {
  return (
    <div>
      <img
        alt="Two gallery goers walking in front of painting of an old man with round glasses"
        src={require("./assets/mobile/image-hero.jpg")}
      />
      {/* Modern Art Gallery Black*/}
      <img src={darkLogo}></img>
      <div>
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </div>
      <br></br>
      <div> Our location</div>
      <img
        src={require("./assets/mobile/image-grid-1.jpg")}
        alt="Open gallery room"
      ></img>
      <h2>Your day at the gallery</h2>
      <div>
        Wander through our distinct collections and find new insights about our
        artists. Dive into the details of their creative process.
      </div>
      <img
        src={require("./assets/mobile/image-grid-2.jpg")}
        alt="Bench in the gallery"
      ></img>
      <img
        src={require("./assets/mobile/image-grid-3.jpg")}
        alt="Gallery goers "
      ></img>
      <h2>Come &amp; be inspired</h2>
      <div>
        We’re excited to welcome you to our gallery and see how our collections
        influence you.
      </div>
      {/* Modern Art Gallery White */}
      <img src={lightLogo}></img>
      <div>
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </div>
      <img alt="Facebook icon" src={iconFacebook}></img>
      <img alt="Instagram icon" src={iconInstagram}></img>
      <img alt="Twitter icon" src={iconTwitter}></img>
    </div>
  );
}

export default App;
