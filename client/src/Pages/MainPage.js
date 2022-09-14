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
      <div className="mt-10 flex  gap-x-6">
        <Card imagesList={imagesUrlList} />
      </div>
    </Fragment>
  );
};

export default MainPage;
