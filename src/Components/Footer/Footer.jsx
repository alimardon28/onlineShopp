import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../Components/assets/images/logo.svg";
import teleg from "../../Components/assets/images/teleg.png";
import instag from "../../Components/assets/images/instag.png";
import wats from "../../Components/assets/images/wats.png";
import wek from "../../Components/assets/images/web.png";

const Footer = () => {
  return (
    <div className="Footer-app">
      <footer id="footers">
        <div className="container">
          <div className="footer">
            <ul className="footer-list">
              <li className="footer-item footerItem">
                <Link className="footer-link" to="/">
                  <img src={logo} alt="logo images" />
                </Link>
              </li>
              <li className="footer-item footerItem">
                <Link to="/selected" className="footer-item-link">
                  Избранное
                </Link>
                <Link to="/corzinka" className="footer-item-link">
                  Корзина
                </Link>
                <Link to="/contacts" className="footer-item-link">
                  Контакты
                </Link>
              </li>
              <li className="footer-item footerItem">
                <Link to="/service" className="footer-item-link">
                  Условия сервиса
                </Link>

                <select className="footer-select" name="" id="">
                  <option value="uz" className="footer-options">
                    uz
                  </option>
                  <option value="ru" className="footer-options">
                    ru
                  </option>
                  <option value="eng" className="footer-options">
                    eng
                  </option>
                </select>
              </li>
              <li className="footer-item" id="footer-item">
                <a
                  className="footer-item-link"
                  target="_blank"
                  href="https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/Wek"
                >
                  <img className="images-foter" src={wek} alt="logo images" />
                </a>
                <a
                  className="footer-item-link"
                  target="_blank"
                  href="https://www.instagram.com/doniyrovalimardon"
                >
                  <img src={instag} alt="logo images" />
                </a>
                <a
                  className="footer-item-link"
                  target="_blank"
                  href="https://t.me/portfolioproject"
                >
                  <img src={teleg} alt="logo images" />
                </a>
                <a
                  className="footer-item-link"
                  target="_blank"
                  href="https://www.watsapp.com/Alimardon"
                >
                  <img src={wats} alt="logo images" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
