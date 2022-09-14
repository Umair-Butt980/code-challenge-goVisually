import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [imagesList, setImagesList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState({});

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
