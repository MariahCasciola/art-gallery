import React from "react";
import lightLogo from "./../assets/logo-light.svg";
import iconFacebook from "./../assets/icon-facebook.svg";
import iconInstagram from "./../assets/icon-instagram.svg";
import iconTwitter from "./../assets/icon-twitter.svg";

function Footer() {
  return (
    <footer className="dark-background bounding-box">
      {/* Modern Art Gallery White */}
      <div className="d-flex">
        <div className="d-flex center">
          <img alt="'Modern Art Gallery' in white" src={lightLogo}></img>
        </div>
        <div className="light-text body-p bs">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </div>
        <div className="flex pb">
          <img className="icon-p" alt="Facebook icon" src={iconFacebook}></img>
          <img
            className="icon-p"
            alt="Instagram icon"
            src={iconInstagram}
          ></img>
          <img className="icon-p" alt="Twitter icon" src={iconTwitter}></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
