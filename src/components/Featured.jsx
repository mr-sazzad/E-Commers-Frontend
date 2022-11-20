import React from "react";
import { ProductsContext } from "../context/ProductsContext";
import Product from "./Product";

const Featured = () => {
  const { isLoading, featuredProducts } = ProductsContext();

  if (isLoading) {
    <p>LOADING .....</p>;
  }

  return (
    <div className="featured-section">
      <div className="width">
        <p className="welcome-title">CHECK NOW</p>
        <h2 className="featured-title">Our Featured Section</h2>
        <div className="featured-image">
          {featuredProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
