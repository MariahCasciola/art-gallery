import React from "react";
import darkLogo from "./../assets/logo-dark.svg";
import iconArrowLeft from "./../assets/icon-arrow-right.svg";

function ModernArtGallery() {
  return (
    <header className="component-margin">
      <div>
        <img
          className="container-fit"
          alt="Two gallery goers walking in front of drawing of an old woman with round glasses"
          src={require("./../assets/mobile/image-hero.jpg")}
        />
      </div>
      {/* Modern Art Gallery Black*/}
      <div className="flex column margin-l-r space">
        <img className="heading" src={darkLogo} alt="Modern Art Gallery" />
        <div className="medium-text bs body-p">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
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
    </header>
  );
}

export default ModernArtGallery;
