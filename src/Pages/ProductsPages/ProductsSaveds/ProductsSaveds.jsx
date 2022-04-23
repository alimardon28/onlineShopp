import React from "react";
import { Link } from "react-router-dom";
import "../ProductsSaveds/ProductsSaveds.css";
import corzina from "../../../Components/assets/images/karzena.png";
import Button from "@mui/material/Button";

const ProductsSaveds = () => {
  return (
    <div>
      <section>
        <div className="corzinaImagesBox">
          <img src={corzina} alt="corzina images" />

          <h2 className="corzenaTitle">Корзина пуста</h2>

          <p className="corzena-desc">Но это никогда не поздно исправить 😟</p>

          <Link to="/" className="corzenaLink">
            <Button className="corzenaButton" variant="contained">
              В каталог товаров
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsSaveds;
