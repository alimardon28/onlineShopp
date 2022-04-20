import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import "../Products/Products.css";
import banner from "../../Components/assets/images/banner.png";
import heart from "../../Components/assets/images/heart.svg";

const Products = () => {
  const { products } = useContext(Context);
  const { withLove, setWithLove } = useContext(Context);

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
                <div className="heartBox">
                  <img src={heart} alt="heart images" />
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
