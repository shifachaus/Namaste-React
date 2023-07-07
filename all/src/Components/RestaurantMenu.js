import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN__URL__MENU } from "../Utils/constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  // Custom hook
  const resInfo = useRestaurantMenu(resId);

  return (
    <div className="container">
      {resInfo === null && <Shimmer />}
      <div className="menu__container">
        <div className="restaurant__info">
          <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
          <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}</p>
        </div>

        <div className="row">
          <p> {resInfo?.cards[0]?.card?.card?.info?.sla?.slaString} </p>
          <p> {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
        </div>

        {resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (item) => {
            return (
              <div
                key={item?.card?.info?.id}
                className="restaurant__menu--list"
              >
                <div>
                  <p>{item?.card?.info?.name}</p>
                  <p>
                    ₹{" "}
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                </div>
                <div className="image__box">
                  {item?.card?.info?.imageId && (
                    <img
                      className="menu__list--img"
                      src={CDN__URL__MENU + item?.card?.info?.imageId}
                      alt="menu-image"
                    />
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
