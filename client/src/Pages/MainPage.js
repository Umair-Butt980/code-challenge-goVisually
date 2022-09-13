import React from "react";
import Card from "../components/CardView/Card";
import { useStateContext } from "../Context/ContextProvider";

const MainPage = () => {
  const { imagesList } = useStateContext();
  console.log(imagesList.length, "in the mainpage");

  return (
    <div className="bg-black p-28 h-48 min-h-full">
      <div className="flex gap-x-6">
        {imagesList?.map((elem, i) => (
          <Card key={i} imagesList={imagesList} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
