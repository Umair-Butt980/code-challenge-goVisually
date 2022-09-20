import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [imagesList, setImagesList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState({});
  const [bar, setBar] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        imagesList,
        setImagesList,
        showModal,
        setShowModal,
        image,
        setImage,
        bar,
        setBar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
