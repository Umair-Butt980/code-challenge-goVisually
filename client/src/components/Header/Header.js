//Third party imports
import React from "react";

//Local Imports
// import "./Header.css";

const Header = (props) => {
  return (
    <div className="bg-[#333333] p-12 flex justify-between">
      <div>
        <h1 className="text-white">Drop Me </h1>
        <p className="text-white"> Drag and drop files to be uploaded</p>
      </div>
      <div>
        <button className="text-white bg-[#0D6ABE] w-28 h-10 rounded">
          Upload File
        </button>
      </div>
    </div>
  );
};

export default Header;
