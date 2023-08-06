import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCartShopping,
  faHouse,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

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
    return (
      <div className="header">
        <Logo />
        <ul className="nav-items">
          <li>
            <FontAwesomeIcon icon={faHouse} /> Home
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressCard} /> About Us
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </li>
        </ul>
      </div>
    );
  };

export default HeaderComponent;