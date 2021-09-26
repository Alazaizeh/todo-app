import React from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
  const state = {
    showCompleted: false,
    itemsPerPage: 3,
    sortString: "",
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
