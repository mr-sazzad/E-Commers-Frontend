import React, { useEffect } from "react";
import { AiTwotoneShop } from "react-icons/ai";
import { RiSecurePaymentFill, RiTruckFill } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { NavLink, useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import Image from "./Image";

const SingleProduct = () => {
  const API = `https://api.pujakaitem.com/api/products`;
  const { id } = useParams();

  const {
    isSingleProductLoading,
    getSingleProduct,
    singleError,
    singleProduct,
  } = ProductsContext();

  const {
    id: alias,
    name,
    price,
    reviews,
    stars,
    stock,
    category,
    company,
    description,
    image,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleProductLoading) {
    return <p>Loading ....</p>;
  }
  return (
    <div className="single-product-page">
      <div className="width">
        <div className="padding">
          <div className="history">
            <NavLink to="/">Home</NavLink>/{name}
          </div>
          <div className="grid-layout">
            <div className="image-side">
              <Image image={image} />
            </div>
            <div className="details-side">
              <h2 className="product-name">{name}</h2>
              <p>{stars}</p>
              <p>{reviews} reviews</p>
              <div className="product-price">
                MRP: <del>{price + 2500}</del>
                <p className="today-price">Today's Price: {price} </p>
              </div>
              <p>{description}</p>
              <div className="warning">
                <div className="options">
                  <RiTruckFill className="option-icon" />
                  Stander Delivery
                </div>
                <div className="options">
                  <TbTruckReturn className="option-icon" />7 Days Return
                </div>
                <div className="options">
                  <RiSecurePaymentFill className="option-icon" />
                  Online Payment
                </div>
                <div className="options">
                  <AiTwotoneShop className="option-icon" />
                  Well Service
                </div>
              </div>
              <div className="product-info">
                <p>
                  Available:{" "}
                  <span>{stock > 0 ? "In Stock" : "STOCK OUT"} </span>
                </p>
                <p>ID: {id}</p>
                <p>Brand: {company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
