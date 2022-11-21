import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <div className="feature-product-img">
        <NavLink to={`single-product/${product.id}`}>
          <figure className="image-div">
            <img src={product.image} className="image" />
            <figcaption className="caption">{product.category}</figcaption>
          </figure>
        </NavLink>
        <div className="content-div">
          <p className="product-identity">{product.name}</p>
          <p className="product-identity">{product.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
