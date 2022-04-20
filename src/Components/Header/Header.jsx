import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/cart3.svg";
import heart from "../assets/images/heart.svg";

const Header = () => {

   const { savedCorzinka , setSavedCorzinka } = useContext(Context);
   const { withLove } = useContext(Context);


  return (
    <div className="headers">
      <header className="header">
        <div className="header-left">
          <Link className="header-link" to="/">
            <img src={logo} alt="icon images" />
          </Link>
        </div>

        <ul className="header-list">
          <li className="header-item">
            <Link className="header-item-link" to="/selected">
              <img className="heart-icons" src={heart} alt="heart images" />
              <span className="header-span">0</span>
            </Link>
          </li>
          <li className="header-item">
            <Link className="header-item-link" to="/corzinka">
              <img className="heart-icons" src={cart} alt="cart images" />
              <span className="header-span">0</span>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
