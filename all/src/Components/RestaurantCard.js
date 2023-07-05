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
    <div
      className="res__card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res__img"
        src={CDN__URL + cloudinaryImageId}
        alt="res__logo"
      />
      <h5 style={{ color: "red" }}> ₹{costForTwo / 100} FOR TWO</h5>
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h5>{avgRating}⭐</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
