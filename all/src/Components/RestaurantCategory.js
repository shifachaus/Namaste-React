import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  function handleClick() {
    console.log(showItems, "showItems");
    setShowIndex();
  }

  return (
    <div className="">
      {/* Header */}
      <div
        className="flex gap-2 justify-between mb-4 mt-4 cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-medium">
          {data?.title} ({data?.itemCards?.length})
        </p>
        <span>🔽</span>
      </div>
      {/* Body */}
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
