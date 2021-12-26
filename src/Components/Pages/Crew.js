/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import Panel from "../Tabs/Panel";
import Tab from "../Tabs/Tab";
import Viktor from "../../assets/crew/image-victor-glover.png";
import Mark from "../../assets/crew/image-mark-shuttleworth.png";
import Douglas from "../../assets/crew/image-douglas-hurley.png";
import Anousheh from "../../assets/crew/image-anousheh-ansari.png";
import "./Style.css";

function Crew() {
  const tabTitles = [1, 2, 3, 4];
  const imageSrc = [Douglas, Mark, Viktor, Anousheh];
  const [selectedTab, setSelectedTab] = useState(0);

  const selectedTabHandler = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="crew">
      <Navbar />
      <h4>
        <span>02</span> MIT YOUR CREW
      </h4>
      <div className="crew-container">
        <div className="image-container">
          {imageSrc.map((image, index) => {
            let style = index === selectedTab ? "show" : "";
            return (
              <img key={index} src={image} className={`${style} crew-image`} />
            );
          })}
        </div>
        <hr />
        <Tab
          titles={tabTitles}
          tabsToggleType="disk"
          tabHandler={selectedTabHandler}
        >
          <Panel>
            <div className="crew-panel">
              <h3>commander</h3>
              <h1>Douglas hurley</h1>
              <p>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="crew-panel">
              <h3>mission specialist</h3>
              <h1>mark shuttleworth</h1>
              <p>
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="crew-panel">
              <h3>pilot</h3>
              <h1>viktor glover</h1>
              <p>
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </div>
          </Panel>
          <Panel>
            <div className="crew-panel">
              <h3>flight engineer</h3>
              <h1>anousheh ansari</h1>
              <p>
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.
              </p>
            </div>
          </Panel>
        </Tab>
      </div>
    </div>
  );
}

export default Crew;
