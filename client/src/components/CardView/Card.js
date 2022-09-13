import React, { Fragment, useState } from "react";
import Modal from "../Modal/Modal";

const Card = (props) => {
  console.log(props, "<=======these are The props recieved by te CARD=====");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
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
            className="w-34 cursor-pointer"
            key={i}
            src={elem.url}
            alt="images"
            onClick={openModal}
          />
          <div className="bg-[#333333] px-6 py-4">
            <div className="text-lg mb-2 text-white" key={i}>
              {elem.name}
            </div>
          </div>
          <div className="absolute text-red-500 top-0 inset-x-0 bg-white">
            <div className="h-2 w-[45%] bg-[#0D6ABE]" />
          </div>
          <Modal
            images={props.imagesList}
            show={showModal}
            button={
              <button
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={closeModal}
              >
                CLOSE
              </button>
            }
          />
          ;
        </Fragment>
      ))}
    </div>
  );
};

export default Card;
