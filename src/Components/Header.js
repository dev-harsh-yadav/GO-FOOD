import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCartShopping,
  faHouse,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <a href="/">
        <img
          alt="logo"
          src="https://img.freepik.com/premium-vector/corporate-logo-with-geometric-shapes_679076-241.jpg"
          id="logo-img"
          key="h"
          className="h-24"
        />
      </a>
    </>
  );
};
const HeaderComponent = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="flex justify-evenly text-3xl bg-pink-400 p-3 items-center">
      <Logo />
      <ul className="flex justify-between ">
        <li className="m-2.5 p-4 text-bold">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHouse} /> Home{" "}
          </Link>
        </li>
        <li   className="m-2.5 p-4 text-bold">
          <Link to={"/about"}>
            {" "}
            <FontAwesomeIcon icon={faAddressCard} /> About Us{" "}
          </Link>
        </li>
        <li   className="m-2.5 p-4 text-bold">
          <Link to={"/contact"}>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> Contact{" "}
          </Link>
        </li>
        <li   className="m-2.5 p-4 text-bold">
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </li>
      </ul>
      <div className="flex">
        {isLoggedin ? (
          <button className="rounded-2xl bg-purple-600 p-2 text-white" onClick={() => setIsLoggedin(false)}>
            LOGOUT
          </button>
        ) : (
          <button className="rounded-2xl bg-purple-600 p-2 text-white" onClick={() => setIsLoggedin(true)}>
            LOG IN
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
