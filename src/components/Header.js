import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg m-2 bg-pink-200">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items flex item-center">
        <ul className="flex p-4 m-4">
          <li className="px-1">
             Online: {isOnline ? "🟢": "🔴"}
          </li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">Cart</li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-3 font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
