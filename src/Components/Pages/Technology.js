/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import Panel from "../Tabs/Panel";
import Tab from "../Tabs/Tab";
import Lunch from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import Space from "../../assets/technology/image-space-capsule-landscape.jpg";
import Spaceport from "../../assets/technology/image-spaceport-landscape.jpg";
import LunchP from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceP from "../../assets/technology/image-space-capsule-portrait.jpg";
import SpaceportP from "../../assets/technology/image-spaceport-portrait.jpg";
import "./Style.css";
import useWindowDimensions from "../../Hooks/useWindowsDimentions";

function Technology() {
  const tabTitles = [1, 2, 3];
  const imageSrc = [Lunch, Spaceport, Space];
  const [selectedTab, setSelectedTab] = useState(0);
  const { width } = useWindowDimensions();
  const portraitImages = [LunchP, SpaceP, SpaceportP];

  const selectedTabHandler = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="technology">
      <Navbar />
      <h4>
        <span>03</span> SPACE LAUNCH 101
      </h4>
      <div className="tech-container">
        <div className="image-container" style={{ width: "100%", padding: 0 }}>
          {imageSrc.map((image, index) => {
            let style = index === selectedTab ? "show" : "";
            return (
              <img
                key={index}
                src={width < 1080 ? image : portraitImages[index]}
                className={`${style} technology-image`}
              />
            );
          })}
        </div>
        <Tab
          titles={tabTitles}
          tabsToggleType="disknumber"
          tabHandler={selectedTabHandler}
        >
          <Panel>
            <div className="tech-panel">
              <h3>THE TERMINOLOGY…</h3>
              <h1>LAUNCH VEHICLE</h1>
              <p>
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="tech-panel">
              <h3>THE TERMINOLOGY…</h3>
              <h1>SPACEPORT</h1>
              <p>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="tech-panel">
              <h3>THE TERMINOLOGY…</h3>
              <h1>SPACE CAPSULE</h1>
              <p>
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          </Panel>
        </Tab>
      </div>
    </div>
  );
}

export default Technology;
