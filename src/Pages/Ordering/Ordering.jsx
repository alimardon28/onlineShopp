import React from "react";
import "../Ordering/Ordering.css";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import location from "../../Components/assets/images/location.svg";
import victor from "../../Components/assets/images/Vector.png";
import visa from "../../Components/assets/images/Vectors.png";

const Ordering = () => {
  const { savedCorzinka, setSavedCorzinka } = useContext(Context);

  let sumCounters = [];

  savedCorzinka?.map((item) => {
    let sums = item.sum * item.didmount;

    sumCounters.push(Number(sums));
  });

  let count = sumCounters.reduce(function (a, b) {
    return a + b;
  });

  return (
    <div id="ordering">
      <div className="container">
        <h2 className="orderingHeading">Оформление заказа</h2>

        <form action="" className="form">
          <div className="form-wrap">
            <div className="orderingLeft">
              <div className="orderingSums">
                <h3 className="formHeading">Доставка курьером</h3>
                <span className="orderingSpan">$ 477</span>
              </div>
              <div className="orderingLocation">
                <iframe
                  className="ordering-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626762389675!2d69.26962081519574!3d41.338728779268585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1647167212785!5m2!1sru!2s"
                  height="146"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>

              <div className="locationBar">
                <img src={location} alt=" location images" />
                <p className="orderingDesc"> Адрес доставки</p>
              </div>

              <div className="orderingOptions">
                <select name="" id="" className="select">
                  <option value="">Ohangaron</option>
                  <option value="">Chilonzor</option>
                  <option value="">Ziyokor</option>
                  <option value="">Qoraqamish</option>
                  <option value="">Olmazor</option>
                </select>
              </div>

              <div className="orderingInput">
                <input
                  type="text"
                  placeholder="Улица / Район"
                  required
                  className="orderingInput-input"
                />
              </div>

              <div className="orderingInputs">
                <input
                  type="number"
                  required
                  className="ordering-inputs"
                  placeholder="Дом"
                />
                <input
                  type="text"
                  required
                  className="ordering-inputs"
                  placeholder="Подъезд"
                />
              </div>

              <div className="orderingKvartere">
                <input type="number" required placeholder="Квартира" />
              </div>
            </div>
            <div className="orderingRight">
              <div className="orderingRightZakaz">
                <h3 className="orderingRightHeading-title">Ваш заказ</h3>

                {savedCorzinka.map((item) => {
                  return (
                    <div>
                      <div className="orderingProducts">
                        <span className="orderingProducts-didmount">
                          x {item.didmount}
                        </span>
                        <h4 className="orderingProducts-title">{item.title}</h4>
                        <span className="orderingProducts-sum">$ {count}</span>
                      </div>

                      <div className="orderingDelivery">
                        <h4 className="orderingDelivery-title">Доставка</h4>
                        <span className="orderingDelivery-sum">$ {count}</span>
                      </div>

                      <div className="orderingPay">
                        <h4 className="orderingPay-title">К оплате</h4>
                        <span className="orderingPay-sum">
                          $ {item.sum * item.didmount}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="orderingPayment">
                <h3>Способ оплаты</h3>

                <div className="orderingVisa">
                  <img src={victor} alt="visa images" />
                  <select name="" id="">
                    <option value="">Счет на kaspi.kz</option>
                    <option value="">Счет на kaspi.kz</option>
                    <option value="">Счет на kaspi.kz</option>
                  </select>
                </div>

                <div className="orderingPromocods">
                  <img src={visa} alt="images viktor" />
                  <select name="" id="">
                    <option value="">Есть промокод?</option>
                    <option value="">141414</option>
                    <option value="">262626</option>
                    <option value="">353535</option>
                  </select>
                </div>
              </div>

              <div className="orderingNumbers">
                <h3>Номер получателя</h3>

                <input
                  type="number"
                  required
                  placeholder="+ 777  __ __ __ __"
                />
              </div>

              <div className="orderingBoxBtn">
                <Link to="/ordered" className="orderingBtn">
                  Закончить оформление
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ordering;
