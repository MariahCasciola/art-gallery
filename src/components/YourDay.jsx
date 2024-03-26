import React from "react";

function YourDay() {
  return (
    <main className="flex column margin-l-r component-margin">
      <div className="d-flex row-reverse margin-l-r-d margin-b">
        <div className="item">
          {/* mobile image */}
          <img
            className="container-fit"
            src={require("./../assets/mobile/image-grid-1.jpg")}
            alt="Open gallery room"
          ></img>
          {/* desktop image */}
          <img
            className="container-image hidden"
            src={require("./../assets/desktop/image-grid-1.jpg")}
          />
        </div>

        <div className="d-flex d-column center item section">
          <div className="heading m">Your day at the gallery</div>
          <div className="body-p medium-text bs">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </div>
        </div>
      </div>

      <div className="d-flex margin-l-r-d item">
        <div className="">
          {/* mobile */}
          <img
            className="img-m container-fit"
            src={require("./../assets/mobile/image-grid-2.jpg")}
            alt="Bench in the gallery"
          ></img>
          {/* desktop */}
          <img
            className="container-image hidden fit"
            src={require("./../assets/desktop/image-grid-2.jpg")}
            alt="Bench in the gallery"
          />
        </div>
        <div className="d-flex d-column margin-l">
          <div className="item margin-b">
            {/* mobile */}
            <img
              className="img-m container-fit"
              src={require("./../assets/mobile/image-grid-3.jpg")}
              alt="Gallery goers standing in a long hallway"
            ></img>
            {/* desktop */}
            <img
              className="container-image hidden fit"
              src={require("./../assets/desktop/image-grid-3.jpg")}
              alt="Gallery goers standing in a long hallway "
            />
          </div>
          <div className="dark-background item">
            <div className="bounding-box">
              <div className="light-text heading m">Come &amp; be inspired</div>
              <div className="light-text body-p">
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default YourDay;
