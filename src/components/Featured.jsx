import React from "react";
import { ProductsContext } from "../context/ProductsContext";

const Featured = () => {
  const { isLoading, featuredProducts } = ProductsContext();

  if (isLoading) {
    <p>LOADING .....</p>;
  }

  console.log(
    "🚀 ~ file: Featured.jsx ~ line 7 ~ Featured ~ featuredProducts",
    featuredProducts
  );

  return (
    <div className="featured-section">
      <div className="width">
        <p className="welcome-title">CHECK NOW</p>
        <h2 className="featured-title">Our Featured Section</h2>
        <div>
          {/* SIDE IMAGE PART 💓  */}
          <div></div>
          {/* MAIN IMAGE PART 💓  */}
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Featured;
