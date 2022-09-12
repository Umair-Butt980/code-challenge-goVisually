//Third party imports
import React, { useRef, useState } from "react";

const Header = (props) => {
  const inputRef = useRef(null);

  let images = [];
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    console.log(event, "This is the image");
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log("fileObj is", fileObj);
    // event.target.value = null;
    console.log(event.target.files);
    // making array of objects
    images.push(event.target.files);
    console.log(images[0], "<============IMAGES ARRAY===========");
  };

  return (
    <div className="bg-[#333333] p-12 flex justify-between">
      <div>
        <h1 className="text-white">Drop Me </h1>
        <p className="text-white"> Drag and drop files to be uploaded</p>
      </div>
      <div>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          multiple
        />
        <button
          onClick={handleClick}
          className="text-white bg-[#0D6ABE] w-28 h-10 rounded"
        >
          Upload File
        </button>
      </div>
    </div>
  );
};

export default Header;
