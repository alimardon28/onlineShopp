import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import heart from "../../Components/assets/images/heart.svg";
import heartFill from "../../Components/assets/images/heart-fill.svg";
import ProductsSaved from "../ProductsPages/ProductsSaved/ProductsSaved";
import "../Selected/Selected.css";

const Selected = () => {
  const { withLove, setWithLove } = useContext(Context);

  const hanleDeleteClick = (id) => {
    setWithLove((state) => state.filter((element) => element.id !== id));
  };

  return (
    <div>
      {withLove.length == 0 ? (
        <ProductsSaved />
      ) : (
        <div>
          <div className="container">
            <ul className="productsList">
              {withLove?.map((item) => {
                return (
                  <li className="productsItem" key={item.id}>
                    <div className="buttonBoxSelected">
                      <button
                        id={item.id}
                        onClick={(id) => hanleDeleteClick(item.id)}
                        data-id={item.id}
                        className="heartBox"
                      >
                        <img
                          id={item.id}
                          src={item.addSaved ? heartFill : heart}
                          alt="heart images"
                        />
                      </button>
                    </div>
                    <Link className="productsLink" to={`/posts/${item.id}`}>
                      <div className="productscard">
                        <div className="productsImages">
                          <img src={item.url} alt={`${item.title} images`} />
                        </div>
                        <div className="productsHeading">
                          <h2 className="productsTitle">{item.title}</h2>
                        </div>
                        <div className="productsCardBody">
                          <span className="productsSum">$ {item.sum}</span>
                          <span className="productsStar">⭐️ {item.star}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selected;
