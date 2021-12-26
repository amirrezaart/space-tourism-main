/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Tab from "../Tabs/Tab";
import Navbar from "./../Navigation/Navbar";
import Panel from "./../Tabs/Panel";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
import "./Style.css";

function Destination() {
  const tabTitles = ["moon", "mars", "europa", "titan"];
  const imageSrc = [moon, mars, europa, titan];
  const [selectedTab, setSelectedTab] = useState(0);

  const selectedTabHandler = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="destination">
      <Navbar />
      <h4>
        <span>01</span> PICK YOUR DESTINATION
      </h4>
      <div className="section">
        <div className="image-container">
          {imageSrc.map((image, index) => {
            let style = index === selectedTab ? "show" : "";
            return (
              <img
                key={index}
                src={image}
                className={`${style} planet-image`}
              />
            );
          })}
        </div>

        <Tab
          titles={tabTitles}
          tabsToggleType="text"
          tabHandler={selectedTabHandler}
        >
          <Panel>
            <div className="destination-panel">
              <h1>MOON</h1>
              <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <hr />
              <p className="distance">
                AVG. DISTANCE <br />
                <span>384,400 km</span>{" "}
              </p>
              <p className="travel-time">
                Est. travel time <br />
                <span>3 days</span>{" "}
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="destination-panel">
              <h1>MARS</h1>
              <p>
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <hr />
              <p className="distance">
                AVG. DISTANCE <br />
                <span>225 MIL. km</span>{" "}
              </p>
              <p className="travel-time">
                Est. travel time <br />
                <span>9 months</span>{" "}
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="destination-panel">
              <h1>EUROPA</h1>
              <p>
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <hr />
              <p className="distance">
                AVG. DISTANCE <br />
                <span>628 MIL. km</span>{" "}
              </p>
              <p className="travel-time">
                Est. travel time <br />
                <span>3 years</span>{" "}
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="destination-panel">
              <h1>TITAN</h1>
              <p>
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
              <hr />
              <p className="distance">
                AVG. DISTANCE <br />
                <span>1.6 BIL. km</span>{" "}
              </p>
              <p className="travel-time">
                Est. travel time <br />
                <span>7 years</span>{" "}
              </p>
            </div>
          </Panel>
        </Tab>
      </div>
    </div>
  );
}

export default Destination;
