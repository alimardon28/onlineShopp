import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import "../Products/Products.css";
import banner from "../../Components/assets/images/banner.png";
import heart from "../../Components/assets/images/heart.svg";
import heartFill from "../../Components/assets/images/heart-fill.svg";

const Products = () => {
  const { products } = useContext(Context);
  const { setWithLove } = useContext(Context);

  const hanleClick = (e) => {
    let id = e.target.id;
    products?.map((item) => {
      if (item.id == id) {
        item.addSaved = !item.addSaved;
        window.localStorage.setItem("products", JSON.stringify(products));
        if (item.addSaved) {
          setWithLove((state) => [...state, item]);
          window.localStorage.setItem("products", JSON.stringify(products));
        } else {
          setWithLove((state) =>
            state.filter((element) => element.id !== item.id)
          );
        }
      }
    });
  };

  return (
    <>
      <div className="products">
        <div className="bannerBox">
          <img src={banner} alt="banner images" />
        </div>

        <ul className="productsList">
          {products?.map((product) => {
            return (
              <li className="productsItem" key={product.id}>
                <div className="buttonBox">
                  <button
                    id={product.id}
                    onClick={(e) => hanleClick(e)}
                    data-id={product.id}
                    className="heartBox"
                  >
                    <img
                      id={product.id}
                      src={product.addSaved ? heartFill : heart}
                      alt="heart images"
                    />
                  </button>
                </div>
                <Link className="productsLink" to={`/posts/${product.id}`}>
                  <div className="productscard">
                    <div className="productsImages">
                      <img src={product.url} alt={`${product.title} images`} />
                    </div>
                    <div className="productsHeading">
                      <h2 className="productsTitle">{product.title}</h2>
                    </div>
                    <div className="productsCardBody">
                      <span className="productsSum">$ {product.sum}</span>
                      <span className="productsStar">⭐️ {product.star}</span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Products;
