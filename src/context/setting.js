import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
  const [itemsPerPage, setitemsPerPage] = useState(3);
  const [showCompleted, setshowCompleted] = useState(false);
  const state = {
    showCompleted,
    setshowCompleted,
    itemsPerPage,
    setitemsPerPage,
    sortString: "",
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
