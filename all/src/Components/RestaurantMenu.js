import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN__URL__MENU } from "../Utils/constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  // Custom hook
  const resInfo = useRestaurantMenu(resId);

  return (
    <div className=" w-[90%] max-w-4xl my-0 mx-auto mt-6 mb-6">
      {resInfo === null && <Shimmer />}
      <div>
        <div className="py-2">
          <h2 className="text-lg  font-medium">
            {resInfo?.cards[0]?.card?.card?.info?.name}
          </h2>
          <p className="text-sm text-gray-500">
            {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}
          </p>
        </div>

        <div className="py-2 flex gap-x-5 mb-4">
          <p> {resInfo?.cards[0]?.card?.card?.info?.sla?.slaString} </p>
          <p> {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
        </div>
        <div className="divide-y divide-gray-200 ">
          <h3 className="text-md  font-medium">Recommended </h3>
          {resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => {
              return (
                <div
                  key={item?.card?.info?.id}
                  className="flex justify-between gap-x-6 py-5 "
                >
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {item?.card?.info?.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      ₹
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </p>
                  </div>

                  {item?.card?.info?.imageId && (
                    <img
                      className="h-12 w-12 flex-none bg-gray-50"
                      src={CDN__URL__MENU + item?.card?.info?.imageId}
                      alt="menu-image"
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
