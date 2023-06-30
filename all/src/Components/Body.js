import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState } from "react";
const Body = () => {
  //Local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <section className="container ">
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.data.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
          className="filter__btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res__container  ">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default Body;
