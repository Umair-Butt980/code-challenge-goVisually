import React from "react";
import axios from "axios";

const storeImagesInBackendService = async (files) => {
  console.log(files, "these are the files in the apiCalls");
  const fd = new FormData();
  fd.append(files, "Images");
  await axios
    .post(`${process.env.REACT_APP_BACKEND_URL}upload-image`, fd, {})
    .then((response) => {
      console.log(response.data.message, "<=====API RESPONSE======");
    });
};

export default storeImagesInBackendService;
