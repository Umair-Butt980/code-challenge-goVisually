import React, { Fragment, useEffect, useState } from "react";
import { useStateContext } from "../../Context/ContextProvider";
import Modal from "../Modal/Modal";

const Card = (props) => {
  const { setShowModal, setImage } = useStateContext();
  const { bar, setBar } = useStateContext();

  const openModal = (elem) => {
    setImage(elem);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (bar != 100) {
        setBar((bar) => bar + 10);
      }
    }, 1000);
  }, [bar]);

  return (
    <Fragment>
      {props.imagesList?.map((elem, i) => (
        <div className="max-w-sm rounded overflow-hidden relative shadow-lg">
          <img
            className="w-34 cursor-pointer opacity-25 float-left "
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
              <div className={`h-2 w-${bar} bg-[#0D6ABE] relative z-10`} />
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Card;
