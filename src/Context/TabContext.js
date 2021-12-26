import React, { useState } from "react";
export const SelectedTabContext = React.createContext();
const SelectedTabContextProvider = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectedTab = () => {
    setSelectedTab(selectedTab);
  };
  return (
    <SelectedTabContext.Provider value={({ selectedTab }, handleSelectedTab)}>
      {props.children}
    </SelectedTabContext.Provider>
  );
};
export default SelectedTabContextProvider;
