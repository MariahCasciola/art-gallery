import React from "react";
import lightLogo from "./../assets/logo-light.svg";
import iconFacebook from "./../assets/icon-facebook.svg";
import iconInstagram from "./../assets/icon-instagram.svg";
import iconTwitter from "./../assets/icon-twitter.svg";

function Footer() {
  return (
    <footer className="dark-background footer">
      {/* Modern Art Gallery White */}
      <div className="d-flex">
        <div className="d-flex center item">
          <img
            className="footer-logo"
            alt="'Modern Art Gallery' in white"
            src={lightLogo}
          ></img>
        </div>

        <div className="light-text body-p bs item">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </div>

        <div className="flex item social-logos-container">
          <img
            className="social-logo"
            alt="Facebook icon"
            src={iconFacebook}
          ></img>
          <img
            className="social-logo"
            alt="Instagram icon"
            src={iconInstagram}
          />
          <img className="social-logo" alt="Twitter icon" src={iconTwitter} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
