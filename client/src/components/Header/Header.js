//Third party imports
import React, { useRef } from "react";

//Local Imports
// import "./Header.css";

const Header = (props) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log("fileObj is", fileObj);
    //  reset file input
    event.target.value = null;
    //  is now empty
    console.log(event.target.files);
    //  can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
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
