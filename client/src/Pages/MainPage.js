import React from "react";
import Card from "../components/CardView/Card";
import { useStateContext } from "../Context/ContextProvider";

const MainPage = () => {
  const { imagesList } = useStateContext();
  const selectedArray = Array.from(imagesList);
  const imagesUrlList = selectedArray.map((elem) => {
    return {
      url: URL.createObjectURL(elem),
      name: elem.name,
    };
  });
  return (
    <div className="bg-black p-28 h-48 min-h-full">
      <div className="flex gap-x-6 gap-y-6">
        {imagesList?.map((elem, i) => (
          <Card key={i} imagesList={imagesUrlList} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
