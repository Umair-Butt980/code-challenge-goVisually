import React from "react";
import axios from "axios";

const storeImagesInBackendService = async (files) => {
  try {
    console.log(files, "these are the files in the apiCalls");
    const fd = new FormData();
    fd.append(files, "Images");
    const headers = {
      "Content-Type": "text/plain",
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}upload-image`,
      fd,
      {
        onUploadProgress: (progressEvent) => {
          console.log(
            "Upload Progress============>",
            +Math.round(
              (progressEvent.loaded / progressEvent.total) * 100 + "%"
            )
          );
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default storeImagesInBackendService;
