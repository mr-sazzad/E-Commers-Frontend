import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <div className="nav-left-side">
          <NavLink to="/" className="nav-left-side-item">
            MELA STORE
          </NavLink>
        </div>
        <div className="nav-right-side">
          <ul>
            <li>
              <NavLink to="/home" className="item">
                HOME
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/products" className="item">
                PRODUCTS
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/contact-us" className="item">
                CONTACT
              </NavLink>
            </li>

            <li>
              <NavLink to="/login" className="login">
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="cart">
                <MdOutlineShoppingBag />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
