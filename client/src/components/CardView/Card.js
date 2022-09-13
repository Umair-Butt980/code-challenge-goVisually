import React, { Fragment, useState } from "react";
import Modal from "../Modal/Modal";

const Card = (props) => {
  let modalOpen = false;

  const openModal = () => {};

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {props.imagesList?.map((elem, i) => (
        <Fragment>
          <img
            className="w-34"
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
          {/* <Modal images={props.imagesList} />; */}
        </Fragment>
      ))}
    </div>
  );
};

export default Card;
