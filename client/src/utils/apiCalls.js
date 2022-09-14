import React from "react";
import axios from "axios";

const storeImagesInBackendService = async (files) => {
  console.log(files);
  const fd = new FormData();
  for (let i = 0; i < files.length; i++) {
    fd.append(`uploaded_images[${i}]`, files[i]);
  }
  await axios
    .post(`${process.env.REACT_APP_BACKEND_URL}upload-image`, fd, {})
    .then((response) => {
      console.log(response.data.message, "<=====API RESPONSE======");
    });
};

export default storeImagesInBackendService;
