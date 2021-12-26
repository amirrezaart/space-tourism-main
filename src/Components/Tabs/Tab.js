/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-fallthrough */
import React, { useState } from "react";
import "./Style.css";

function Tab(props) {
  // Props
  const { children, titles, tabsToggleType, tabHandler } = props;

  // States
  const [selectedTab, setSelectedTab] = useState(0);

  //Variabels

  // Functions
  const handleChange = (index) => {
    setSelectedTab(index);
    tabHandler(index);
  };

  return (
    <div className="container">
      <ul className="tabs">
        {titles.map((tab, index) => {
          let style = index === selectedTab ? `selected-${tabsToggleType}` : "";
          return (
            <div key={index}>
              <li
                id="tabTitle"
                onClick={() => handleChange(index)}
                className={`${style} ${tabsToggleType}`}
              >
                {tab}
              </li>
              {tabsToggleType === "disk" ? (
                <label
                  htmlFor="tabTitle"
                  onClick={() => handleChange(index)}
                  className={`${style}`}
                ></label>
              ) : null}
            </div>
          );
        })}
      </ul>
      {children.map((item, index) => {
        let style = index === selectedTab ? "detail-show" : "";
        return (
          <div key={index} className={`detail ${style}`}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Tab;
