import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [imagesList, setImagesList] = useState([]);
  console.log(imagesList, "<==================IN CONTEXT");
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ imagesList, setImagesList }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
