import React from "react";
import darkLogo from "./../assets/logo-dark.svg";
import lightLogo from "./../assets/logo-light.svg";
import iconArrowLeft from "./../assets/icon-arrow-right.svg";

function ModernArtGallery() {
  return (
    <header className="flex column component-margin d-flex d-row">
      <div className="d-flex">
        <div className="black-box"></div>
        <img
          className="container-fit"
          alt="Two gallery goers walking in front of drawing of an old woman with round glasses"
          src={require("./../assets/mobile/image-hero.jpg")}
        />
        <img
          className="container-image hidden"
          src={require("./../assets/desktop/image-hero.jpg")}
          alt="Two gallery goers walking in front of drawing of an old woman with round glasses"
        />
      </div>
      {/* Modern Art Gallery Black and White*/}
      <div className="d-flex d-row">
        <div className="flex column margin-l-r absolute position-logo">
          <img
            className="heading logo-dark"
            src={darkLogo}
            alt="Modern Art Gallery"
          />
        </div>
        <div className="flex column margin-l-r absolute position-logo hidden">
          <img className="heading logo-light" src={lightLogo} />
        </div>

        <div className="d-flex d-column absolute position">
          <div className="flex column margin-l-r margin">
            <div className="medium-text bs body-p">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </div>
          </div>
          <div className="flex row margin-l-r">
            <div className="flex button">
              <div className="flex center dark-background light-text sub-button">
                OUR LOCATION
              </div>
              <div className="flex center sub-button arrow">
                <img src={iconArrowLeft}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ModernArtGallery;
