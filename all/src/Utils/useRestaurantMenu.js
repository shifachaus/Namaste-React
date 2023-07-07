import { useEffect, useState } from "react";
import { MENU__API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(MENU__API + resId);
    const res = await data.json();
    setResInfo(res?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
