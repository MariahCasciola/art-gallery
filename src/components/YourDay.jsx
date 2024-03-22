import React from "react";

function YourDay() {
  return (
    <main className="flex column margin component-margin">
      <div className="mb">
        <img
          src={require("./../assets/mobile/image-grid-1.jpg")}
          alt="Open gallery room"
        ></img>
      </div>
      <div className="heading h2">YOUR DAY AT THE GALLERY</div>
      <div className="body-p mt mb">
        Wander through our distinct collections and find new insights about our
        artists. Dive into the details of their creative process.
      </div>
      <img
        className=""
        src={require("./../assets/mobile/image-grid-2.jpg")}
        alt="Bench in the gallery"
      ></img>
      <img
        className="mt"
        src={require("./../assets/mobile/image-grid-3.jpg")}
        alt="Gallery goers standing in a long hallway "
      ></img>
      <div className="black-background padding mt">
        <div className="white-text heading h2 pt pr">
          COME &amp; BE INSPIRED
        </div>
        <div className="white-text body-p pt pb">
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </div>
      </div>
    </main>
  );
}

export default YourDay;
