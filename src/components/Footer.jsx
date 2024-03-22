import React from "react";
import lightLogo from "./../assets/logo-light.svg";
import iconFacebook from "./../assets/icon-facebook.svg";
import iconInstagram from "./../assets/icon-instagram.svg";
import iconTwitter from "./../assets/icon-twitter.svg";

function Footer() {
  return (
    <div className="black-background">
      {/* Modern Art Gallery White */}
      <img alt="'Modern Art Gallery' in white" src={lightLogo}></img>
      <div className="white-text body-p">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </div>
      <img alt="Facebook icon" src={iconFacebook}></img>
      <img alt="Instagram icon" src={iconInstagram}></img>
      <img alt="Twitter icon" src={iconTwitter}></img>
    </div>
  );
}

export default Footer;
