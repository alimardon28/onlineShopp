import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import ProductsSaveds from "../ProductsPages/ProductsSaveds/ProductsSaveds";
import CorzinkaProducts from "../Corzinka/CorzinkaProducts/CorzinkaProducts";

const Corzinka = (props) => {
  const { savedCorzinka } = useContext(Context);

  return (
    <>{savedCorzinka.length > 0 ? <CorzinkaProducts /> : <ProductsSaveds />}</>
  );
};

export default Corzinka;
