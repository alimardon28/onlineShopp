import React from "react";
import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";
import teleg from "../../Components/assets/images/teleg.png";
import instag from "../../Components/assets/images/instag.png";
import wats from "../../Components/assets/images/wats.png";
import wek from "../../Components/assets/images/web.png";
import phone from "../../Components/assets/images/phone.png";
import location from "../../Components/assets/images/location.svg";

const Contacts = () => {
  return (
    <div className="contacts-app">
      <div className="container">
        <div className="contacts">
          <div className="contacts-left">
            <div className="contacts-left__hero">
              <h3 className="contacts-heading">Наш офис</h3>
              <div className="contacts-location">
                <iframe
                  className="contactsLocation"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626762389675!2d69.26962081519574!3d41.338728779268585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1647167212785!5m2!1sru!2s"
                  height="146"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
              <div className="contacts-bottom">
                <img src={location} alt="location images" />
                <div className="contacts-bottom_regions">
                  <p className="contacts-desc">
                    Sergili 2, 15 k,Tashent, uzbekistan
                  </p>
                  <span className="contacts-span">8 этаж 96 home</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contacts-right">
            <ul className="contacts-list">
              <li className="contacts-item">
                <a
                  className="contacts-item-link"
                  target="_blank"
                  href="https://www.watsapp.com/Alimardon"
                >
                  <img src={wats} alt="watsapp images" />
                </a>
              </li>
              <li className="contacts-item wek">
                <a
                  className="contacts-item-link"
                  target="_blank"
                  href="https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/Wek"
                >
                  <img src={wek} alt="wek images" />
                </a>
              </li>
              <li className="contacts-item ins">
                <a
                  className="contacts-item-link"
                  target="_blank"
                  href="https://www.instagram.com/doniyrovalimardon"
                >
                  <img src={instag} alt="instagram images" />
                </a>
              </li>
              <li className="contacts-item teleg    ">
                <a
                  className="contacts-item-link"
                  target="_blank"
                  href="https://t.me/portfolioproject"
                >
                  <img src={teleg} alt="telegram images" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contacts-numbers">
          <span className="number-span">
            <img src={phone} alt="phone images" />
            +7 777 777 77 77
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
