import React from "react";
import lightLogo from "./../assets/logo-light.svg";
import iconFacebook from "./../assets/icon-facebook.svg";
import iconInstagram from "./../assets/icon-instagram.svg";
import iconTwitter from "./../assets/icon-twitter.svg";

function Footer() {
  return (
    <div className="black-background padding">
      {/* Modern Art Gallery White */}
      <div className="mt mb">
        <img alt="'Modern Art Gallery' in white" src={lightLogo}></img>
      </div>
      <div className="white-text body-p mb">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </div>
      <div className="flex pb">
        <img className="icon-m" alt="Facebook icon" src={iconFacebook}></img>
        <img className="icon-m" alt="Instagram icon" src={iconInstagram}></img>
        <img className="icon-m" alt="Twitter icon" src={iconTwitter}></img>
      </div>
    </div>
  );
}

export default Footer;
