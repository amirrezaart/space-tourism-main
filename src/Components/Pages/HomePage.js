import React from "react";
import Navbar from "./../Navigation/Navbar";
import "./Style.css";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <header>
        <div className="header-left">
          <p className="travel">So, you want to travel to</p>
          <h1>Space</h1>
          <p className="let">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <div className="explore-outer-radius"></div>
          <div className="explore-radius">
            <h1>explore</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
