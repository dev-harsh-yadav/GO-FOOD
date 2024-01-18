import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCartShopping,
  faHouse,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)
  return (
    <div className="flex justify-evenly text-3xl bg-purple-900 p-3 items-center text-white">
      <Logo />
      <ul className="flex justify-between ">
        <li className="m-2.5 p-4 text-bold">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHouse} /> Home{" "}
          </Link>
        </li>
        <li className="m-2.5 p-4 text-bold">
          <Link to={"/about"}>
            {" "}
            <FontAwesomeIcon icon={faAddressCard} /> About Us{" "}
          </Link>
        </li>
        <li className="m-2.5 p-4 text-bold">
          <Link to={"/contact"}>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> Contact{" "}
          </Link>
        </li>
        <li className="m-2.5 p-4 text-bold">
          <Link to={"/Instamart"}>
        {   /* <FontAwesomeIcon icon={faEnvelope} /> Instamart{" "} */}
          </Link>
        </li>
        <li className="m-2.5 p-4 text-bold">
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} /> {cartItems.length}-Cart
          </Link>
        </li>
      </ul>
      <div className="flex">
        {isLoggedin ? (
          <button
            className="rounded-2xl bg-purple-600 p-2 text-white"
            onClick={() => setIsLoggedin(false)}
          >
            LOGOUT
          </button>
        ) : (
          <button
            className="rounded-2xl bg-purple-600 p-2 text-white"
            onClick={() => setIsLoggedin(true)}
          >
            LOG IN
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
