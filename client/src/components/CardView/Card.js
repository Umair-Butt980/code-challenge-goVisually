import React, { Fragment, useState } from "react";
import { useStateContext } from "../../Context/ContextProvider";
import Modal from "../Modal/Modal";

const Card = (props) => {
  const { setShowModal, setImage } = useStateContext();

  const openModal = (elem) => {
    setImage(elem);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden relative shadow-lg">
      {props.imagesList?.map((elem, i) => (
        <Fragment>
          <img
            className="w-34 cursor-pointer opacity-25"
            key={i}
            src={elem.url}
            alt="images"
            onClick={() => openModal(elem)}
          />
          <div className="bg-[#333333] px-6 py-4">
            <div className="text-lg mb-2 text-white" key={i}>
              {elem.name}
            </div>
            <div className="absolute top-0 inset-x-0 bg-white">
              <div className="h-2 w-[45%] bg-[#0D6ABE] relative z-10" />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Card;
