import { useState } from "react";
import { LOGO__URL } from "../Utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <section className="border">
      <div className="header container">
        <div className="logo__container">
          <img className="logo" src={LOGO__URL} />
        </div>
        <nav>
          <ul className="nav__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
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
