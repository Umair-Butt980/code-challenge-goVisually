import React, { Fragment } from "react";

const Card = (props) => {
  console.log(props.imagesList, "these are the props");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {props.imagesList?.map((elem, i) => (
        <Fragment>
          <img
            className="w-34"
            key={i}
            src={elem.url}
            alt="Sunset in the mountains"
          />
          <div className="bg-[#333333] px-6 py-4">
            <div className="text-lg mb-2 text-white" key={i}>
              {elem.name}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Card;
