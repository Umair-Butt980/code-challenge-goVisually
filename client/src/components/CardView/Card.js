import React, { Fragment, useState } from "react";
import Modal from "../Modal/Modal";

const Card = (props) => {
  let modalOpen = false;

  const openModal = () => {
    modalOpen = true;
    console.log(modalOpen, "IM CLICKED");
  };

  return (
    <div className="max-w-sm rounded overflow-hidden relative shadow-lg">
      {props.imagesList?.map((elem, i) => (
        <Fragment>
          <img
            className="w-34 cursor-pointer"
            key={i}
            src={elem.url}
            alt="Sunset in the mountains"
            onClick={openModal}
          />
          <div className="bg-[#333333] px-6 py-4">
            <div className="text-lg mb-2 text-white" key={i}>
              {elem.name}
            </div>
          </div>
          <div className="absolute text-red-500 top-60 inset-x-0 bg-white">
            <div className="h-2 w-[45%] bg-[#0D6ABE]" />
          </div>{" "}
          {/* <Modal images={props.imagesList} />; */}
        </Fragment>
      ))}
    </div>
  );
};

export default Card;
