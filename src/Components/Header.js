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
            {/* <FontAwesomeIcon icon={faEnvelope} /> Instamart{" "} */}
          </Link>
        </li>
        <div className=" m-2.5 relative text-bold">
            <li >
              <Link to={"/cart"} className=" ">
                <span className=" text-sm top-0 right-0">{cartItems.length}</span>
                <FontAwesomeIcon icon={faCartShopping} className="absolute mt-7 -ml-10 " />
              </Link>
          </li>
      </div>
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
