import { CDN__URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRating,
    deliveryTime,
  } = resData.data.data;

  return (
    <div className="mx-auto max-w-2xl   px-4  sm:px-3 sm:py-3  hover:bg-slate-100 flex flex-col gap-4 ">
      <div className="aspect-h-1 aspect-w-1 w-full  ">
        <img
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          src={CDN__URL + cloudinaryImageId}
          alt="res__logo"
        />
      </div>
      <div>
        <h2 className="text-lg text-gray-900 font-medium">{name}</h2>
        <p className="text-sm text-gray-500"> {cuisines.join(", ")}</p>
      </div>
      <div className="flex justify-between align-center">
        <p className="text-xs text-gray-500">⭐{avgRating}</p>
        <p className="text-xs text-gray-500">{deliveryTime} minutes</p>
        <p className="text-xs text-gray-500"> ₹{costForTwo / 100} FOR TWO</p>
      </div>
    </div>
  );
};

// HOC =>Higher Order Function

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
