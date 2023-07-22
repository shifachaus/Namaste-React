import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const [showIndex, setShowIndex] = useState(null);

  // Custom hook
  const resInfo = useRestaurantMenu(resId);

  const addFoodItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };

  const category =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(category);

  return (
    <div className=" w-[90%] max-w-4xl my-0 mx-auto mt-6 mb-6">
      {resInfo === null && <Shimmer />}
      <div className="w-[90%] max-w-4xl my-0 mx-auto mt-6 mb-6">
        <div className="py-2">
          <h2 className="text-lg  font-medium">
            {resInfo?.cards[0]?.card?.card?.info?.name}
          </h2>
          <p className="text-sm text-gray-500">
            {resInfo?.cards[0]?.card?.card?.info?.cuisines?.join(",")}
          </p>
        </div>

        <div className="py-2 flex gap-x-5 mb-4">
          <p> {resInfo?.cards[0]?.card?.card?.info?.sla?.slaString} </p>
          <p> {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
        </div>

        <div className=" ">
          {category?.map((c, index) => {
            // console.log(c, "CAT");
            return (
              // CONTROLLED COMPONENT🌟
              <RestaurantCategory
                key={c?.card?.card.title}
                data={c?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => {
                  console.log(index),
                    setShowIndex(index === showIndex ? null : index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
