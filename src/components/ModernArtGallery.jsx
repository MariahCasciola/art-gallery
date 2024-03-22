import React from "react";
import darkLogo from "./../assets/logo-dark.svg";
import iconArrowLeft from "./../assets/icon-arrow-right.svg";

function ModernArtGallery() {
  return (
    <header>
      {/* flex center responsive no-gaps absolute border item */}
      <div>
        <img
          className="header-img"
          alt="Two gallery goers walking in front of drawing of an old woman with round glasses"
          src={require("./../assets/mobile/image-hero@2x.jpg")}
        />
      </div>
      {/* Modern Art Gallery Black*/}
      <div className="flex column mt margin space">
        <img className="mb mr" src={darkLogo} alt="Modern Art Gallery" />
        <div className="grey-text body-p">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </div>
      </div>
      <div className="flex row margin mt">
        <div className="flex center black-background white-text heading our-location">
          OUR LOCATION
        </div>
        <div className="flex center right-arrow">
          <img src={iconArrowLeft}></img>
        </div>
      </div>
    </header>
  );
}

export default ModernArtGallery;
