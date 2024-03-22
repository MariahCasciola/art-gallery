import React from "react";

function YourDay() {
  return (
    <main className="flex column">
      <img
        src={require("./../assets/mobile/image-grid-1.jpg")}
        alt="Open gallery room"
      ></img>
      <h2 className="heading">YOUR DAY AT THE GALLERY</h2>
      <div>
        Wander through our distinct collections and find new insights about our
        artists. Dive into the details of their creative process.
      </div>
      <img
        src={require("./../assets/mobile/image-grid-2.jpg")}
        alt="Bench in the gallery"
      ></img>
      <img
        src={require("./../assets/mobile/image-grid-3.jpg")}
        alt="Gallery goers standing in a long hallway "
      ></img>
      <div className="black-background">
        <h2 className="white-text heading">COME &amp; BE INSPIRED</h2>
        <div className="white-text body-p">
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </div>
      </div>
    </main>
  );
}

export default YourDay;
