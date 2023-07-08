import { useState } from "react";
import { LOGO__URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const [auth, setAuth] = useState(false);

  const onlineStatus = useOnlineStatus();
  return (
    <section className="flex border border-purple-200 shadow-md">
      <div className="flex justify-between items-center w-[90%] max-w-7xl my-0 mx-auto">
        <div className="logo__container">
          <Link to="/">
            <img className="w-40" src={LOGO__URL} />
          </Link>
        </div>
        <nav className="hidden md:inline">
          <ul className="flex gap-4">
            <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>

            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>

            <button
              className="login"
              onClick={() => {
                setAuth(!auth);
              }}
            >
              {auth ? "logout" : "Login"}
            </button>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
