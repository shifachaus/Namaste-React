import React from "react";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Footer = () => {
  const {
    user: { name },
  } = useContext(UserContext);

  return (
    <div className="border">
      <div className="w-[90%] max-w-7xl my-0 mx-auto mb-4">
        <p className=" text-center text-md text-gray-500 pt-4">
          This site is developed by {name}💖
        </p>
      </div>
    </div>
  );
};

export default Footer;
