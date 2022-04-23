import React from "react";
import { Link } from "react-router-dom";
import heartBlack from "../../../Components/assets/images/heartblack.svg";
import "../ProductsSaved/ProductsSaved.css";

const Productssaved = () => {
  return (
    <div className="heartBlack">
      <img src={heartBlack} alt="heart black images" />
      <h2 className="paroductSaveds">
        Вы не сохранили товар для последующего просмотра
      </h2>
      <Link className="productSavedsLink" to="/">
        <button className="buttons">Bернитесь назад</button>
      </Link>
    </div>
  );
};

export default Productssaved;
