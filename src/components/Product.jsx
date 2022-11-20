import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <NavLink to={`single-product/${product.id}`}>
      <div className="feature-product-img">
        <figure className="image-div">
          <img src={product.image} className="image" />
          <figcaption className="caption">{product.category}</figcaption>
        </figure>
        <div className="content-div">
          <p className="product-identity">{product.name}</p>
          <p className="product-identity">{product.price}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
