import React from "react";

function YourDay() {
  return (
    <main className="flex column margin-l-r component-margin">
      <div className="d-flex row-reverse margin-l-r-d margin-b">
        {/* Mobile image */}
        <img
          className="mobile container-fit"
          src={require("./../assets/mobile/image-grid-1@2x.jpg")}
          alt="Open gallery room"
        ></img>
        {/* Tablet image */}
        <img
          className="tablet container-fit"
          src={require("./../assets/tablet/image-grid-1.jpg")}
          alt=""
        />
        {/* Desktop image */}
        <img
          className="desktop container-fit"
          src={require("./../assets/desktop/image-grid-1.jpg")}
        />

        <div className="d-flex d-column center section">
          <div className="heading m">Your day at the gallery</div>
          <div className="body-p medium-text bs">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </div>
        </div>
      </div>

      <div className="d-flex margin-l-r-d">
        <div className="item1">
          {/* Mobile image */}
          <img
            className="img-m mobile container-fit"
            src={require("./../assets/mobile/image-grid-2@2x.jpg")}
            alt="Bench in the gallery"
          ></img>
          {/* Tablet image */}
          <img
            className="tablet container-fit"
            src={require("./../assets/tablet/image-grid-2.jpg")}
            alt="Bench in the gallery"
          />
          {/* Desktop image */}
          <img
            className="desktop container-fit"
            src={require("./../assets/desktop/image-grid-2.jpg")}
            alt="Bench in the gallery"
          />
        </div>

        <div className="d-flex d-column margin-l item">
          <div className="margin-b item1">
            {/* Mobile image */}
            <img
              className="img-m mobile container-fit"
              src={require("./../assets/mobile/image-grid-3@2x.jpg")}
              alt="Gallery goers standing in a long hallway"
            ></img>
            {/* Tablet image */}
            <img
              className="tablet container-fit"
              src={require("./../assets/tablet/image-grid-3@2x.jpg")}
              alt="Gallery goers standing in a long hallway"
            />
            {/* Desktop image */}
            <img
              className="desktop container-fit"
              src={require("./../assets/desktop/image-grid-3.jpg")}
              alt="Gallery goers standing in a long hallway "
            />
          </div>
          <div className="dark-background bounding-box item1">
            <div className="light-text heading m">Come &amp; be inspired</div>
            <div className="light-text bs body-p">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default YourDay;
