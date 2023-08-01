import { useState, useContext } from "react";
// import { LOGO__URL } from "../Utils/constants";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [auth, setAuth] = useState(false);
  const { user } = useContext(UserContext);

  // console.log(user);

  const onlineStatus = useOnlineStatus();

  //subscribing to store here
  const cartItems = useSelector((store) => store.cart.item);
  // console.log(cartItems, "Header ITEMS");

  return (
    <section className="flex border border-purple-200 shadow-md">
      <div className="flex justify-between items-center w-[90%] max-w-7xl my-0 mx-auto">
        <div className="logo__container">
          <img data-testid="logo" className="w-40" alt="logo" src={Logo} />
          {/* <Link to="/">
          </Link> */}
        </div>
        <nav className=" md:inline">
          <ul className="flex gap-4">
            <p data-testid="online-status">{onlineStatus ? "🟢" : "🔴"}</p>

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
            <Link to="/cart">
              <span data-testid="cart">Cart {cartItems?.length}</span>
            </Link>
            <span className="p-10 font-bold text-red-900">{user?.name}</span>
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
