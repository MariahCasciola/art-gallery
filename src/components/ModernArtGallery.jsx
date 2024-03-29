import React from "react";
import darkLogo from "./../assets/logo-dark.svg";
import lightLogo from "./../assets/logo-light.svg";
import iconArrowRight from "./../assets/icon-arrow-right.svg";

function ModernArtGallery() {
  return (
    <header className="flex column component-margin d-row">
      <div className="flex column">
        <div className="black-box"></div>
        {/* Mobile image */}
        <img
          className="mobile container-fit"
          alt="Two gallery goers walking in front of drawing of an old woman with round glasses"
          src={require("./../assets/mobile/image-hero@2x.jpg")}
        />
        {/* Tablet Image */}
        <img
          className="tablet container-fit"
          src={require("./../assets/tablet/image-hero.jpg")}
          alt="Two gallery goers walking in front of drawing of an old woman with round glasses"
        />
        {/* Desktop Image */}
        <img
          className="desktop"
          src={require("./../assets/desktop/image-hero.jpg")}
          alt="Two gallery goers walking in front of drawing of an old woman with round glasses"
        />
      </div>
      {/* Modern Art Gallery Black and White*/}
      <div className="flex column">
        <div className="flex column margin-l-r position-logo absolute">
          <img
            className="heading logo-dark"
            src={darkLogo}
            alt="Modern Art Gallery"
          />
        </div>
        <div className="flex column margin-l-r absolute position-logo hide-white-logo">
          <img
            className="heading logo-light"
            src={lightLogo}
            alt="Modern Art Gallery"
          />
        </div>

        <div className="flex column absolute position">
          <div className="flex column margin-l-r padding-b">
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
                <img alt="Arrow pointing right" src={iconArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ModernArtGallery;
