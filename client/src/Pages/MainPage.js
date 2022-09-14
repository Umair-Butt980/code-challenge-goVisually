import React, { Fragment } from "react";
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
    <Fragment>
      <div className="bg-black p-28 h-48">
        <div className="flex gap-x-6 gap-y-6">
          <Card imagesList={imagesUrlList} />
        </div>
        ;
      </div>
    </Fragment>
  );
};

export default MainPage;
