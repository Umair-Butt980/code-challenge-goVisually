//Third party imports
import React, { useRef, useState } from "react";
import { useStateContext } from "../../Context/ContextProvider";
import storeImagesInBackendService from "../../utils/apiCalls";

const Header = (props) => {
  const inputRef = useRef(null);
  const { imagesList, setImagesList } = useStateContext();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setImagesList([...imagesList, ...event.target.files]);
    storeImagesInBackendService(event.target.files);
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
          accept="image/png , image/jpeg , image/webp"
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
