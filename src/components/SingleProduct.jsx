import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
const SingleProduct = () => {
  const API = `https://api.pujakaitem.com/api/product`;
  const { id } = useParams();

  const { isSingleProductLoading, getSingleProduct, singleError } =
    ProductsContext();
  useEffect(() => {
    getSingleProduct(`${API}?.id=${id}`);
  }, []);
  return (
    <div className="single-product-page">
      <div className="width">
        <div className=""></div>
      </div>
    </div>
  );
};

export default SingleProduct;
