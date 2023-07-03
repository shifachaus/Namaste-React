import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, SetSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );

    const res = await data.json();
    // Optional Chaining (handling data)
    setListOfRestaurants(res?.data?.cards);
    setfilteredRestaurant(res?.data?.cards);
  };

  return (
    <section className="container ">
      {/* Conditional Rendering */}
      {listOfRestaurants.length === 0 && <Shimmer />}
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search__box"
            placeholder="search for restaurants and food"
            value={searchText}
            onChange={(e) => SetSearchText(e.target.value)}
          />
          <button
            className="search__btn"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              // searchText
              const filteredList = listOfRestaurants.filter((reataurant) => {
                return reataurant.data.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.data.avgRating > 4
            );
            setfilteredRestaurant(filteredList);
          }}
          className="filter__btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res__container  ">
        {filteredRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default Body;
