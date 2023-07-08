import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h3>Looks like you're offline!! please check your internet connection</h3>
    );
  }

  return (
    <section className="w-[90%] max-w-7xl my-0 mx-auto mb-8 ">
      {!onlineStatus && (
        <h3>
          Looks like you're offline!! please check your internet connection
        </h3>
      )}

      {/* Conditional Rendering */}
      {listOfRestaurants.length === 0 && <Shimmer />}
      <div className="flex flex-col gap-6 mt-6 mb-6 md:flex-row">
        <div>
          <input
            type="text"
            className="   border-purple-300  cursor-pointer bg-white py-2 px-4  shadow-md flex-grow outline-none bg-transparent"
            placeholder="search for restaurants"
            value={searchText}
            onChange={(e) => SetSearchText(e.target.value)}
          />
          <button
            className=" text-purple-500  border-purple-300  cursor-pointer bg-white py-2 px-2 shadow-md hover:shadow-xl"
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
          className="text-purple-500  border-purple-300 cursor-pointer bg-white py-2 w-44  shadow-md hover:shadow-xl"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 bg-white">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.data?.data?.id}
            to={"/restaurant/" + restaurant?.data?.data?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Body;
