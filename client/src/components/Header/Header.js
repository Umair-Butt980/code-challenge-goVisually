//Third party imports
import React, { useRef, useState } from "react";
import { useStateContext } from "../../Context/ContextProvider";
import storeImagesInBackendService from "../../utils/apiCalls";
import { FileUploader } from "react-drag-drop-files";

const Header = (props) => {
  const fileTypes = ["JPG", "PNG", "GIF"];

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
  const handleChange = (file) => {
    console.log(file, "=======");
    setImagesList([file]);
  };

  return (
    <div className="bg-[#333333] p-12 flex justify-between">
      <div>
        <h1 className="text-white">Drop Me </h1>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
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
