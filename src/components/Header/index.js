import "./style.css";
import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";

import { useContext } from "react";
import { cardContext } from "../../services/cardContext";

const Header = () => {
  const { card } = useContext(cardContext);
  return (
    <nav className="nav containar flex justify-between align-center">
      <div className="logo">
        <Link to="/">
          <img
            src="https://thumbs.dreamstime.com/z/lets-shopping-logo-design-template-shop-icon-135610500.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="flex justify-between align-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li className="card-logo">
          <Link to="/Card" className="flex justify-between align-center">
            <span>{card ? card.totalItem : 0}</span>
            <FiShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
