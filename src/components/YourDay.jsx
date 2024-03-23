import React from "react";

function YourDay() {
  return (
    <main className="flex column margin-l-r component-margin">
      <img
        className="container-fit"
        src={require("./../assets/mobile/image-grid-1.jpg")}
        alt="Open gallery room"
      ></img>
      <div className="heading m">Your day at the gallery</div>
      <div className="body-p medium-text bs">
        Wander through our distinct collections and find new insights about our
        artists. Dive into the details of their creative process.
      </div>
      <img
        className="img-m"
        src={require("./../assets/mobile/image-grid-2.jpg")}
        alt="Bench in the gallery"
      ></img>
      <img
        className="img-m"
        src={require("./../assets/mobile/image-grid-3.jpg")}
        alt="Gallery goers standing in a long hallway "
      ></img>
      <div className="dark-background">
        <div className="bounding-box">
          <div className="light-text heading m">Come &amp; be inspired</div>
          <div className="light-text body-p">
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </div>
        </div>
      </div>
    </main>
  );
}

export default YourDay;
