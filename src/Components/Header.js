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
          src="https://mansonproducts.com/wp-content/uploads/2017/05/Logo-Manson-Transparent-1024x609-comp.png"
          id="logo-img"
          key="h"
        ></img>
      </a>
    </>
  );
};
const HeaderComponent = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="header">
      <Logo />
      <ul className="nav-items">
        <li>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHouse} /> Home{" "}
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            {" "}
            <FontAwesomeIcon icon={faAddressCard} /> About Us{" "}
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} /> Contact{" "}
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </li>
      </ul>
      <div className="flex">
        {isLoggedin ? (
          <button className="header-btn" onClick={() => setIsLoggedin(false)}>
            LOGOUT
          </button>
        ) : (
          <button className="header-btn" onClick={() => setIsLoggedin(true)}>
            LOG IN
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
