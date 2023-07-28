import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Body = () => {
  //Local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, SetSearchText] = useState("");

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );

    const res = await data.json();
    // Optional Chaining (handling data)
    setListOfRestaurants(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setfilteredRestaurant(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h3>Looks like you're offline!! please check your internet connection</h3>
    );
  }

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return (
    <section className="w-[90%] max-w-7xl my-0 mx-auto mb-8 h-fit">
      {!onlineStatus && (
        <h3>
          Looks like you're offline!! please check your internet connection
        </h3>
      )}

      {/* Conditional Rendering */}
      {listOfRestaurants?.length === 0 && <Shimmer />}
      <div className="flex flex-col gap-4 mb-6 md:flex-row mt-4">
        <div>
          <input
            type="text"
            className="  border border-purple-300  cursor-pointer bg-white py-2 px-4   flex-grow outline-none bg-transparent"
            placeholder="search for restaurants"
            value={searchText}
            onChange={(e) => SetSearchText(e.target.value)}
          />
          <button
            className="border bg-purple-500  border-purple-300  cursor-pointer bg-white py-2 px-2 "
            onClick={() => {
              //Filter the restaurant cards and update the UI
              // searchText
              const filteredList = listOfRestaurants.filter((reataurant) => {
                return reataurant?.info?.name
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
              (res) => res?.info?.avgRating > 4
            );
            setfilteredRestaurant(filteredList);
          }}
          className=" bg-purple-500 border border-purple-300 cursor-pointer bg-white py-2 w-44   hover:shadow-xl"
        >
          Top Rated Restaurants
        </button>
        <div>
          <label>User Name</label>
          <input
            type="text"
            className=" ml-2  border-purple-300  cursor-pointer bg-white py-2 px-4  border flex-grow outline-none bg-transparent"
            placeholder="search for restaurants"
            value={user?.name}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 bg-white">
        {filteredRestaurant?.map((restaurant) => (
          // console.log(restaurant),
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {/* promoted */}

            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Body;
