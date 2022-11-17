import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // mobile menu open function
  const handleMenuOpen = (prev) => {
    setOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <div className="nav-left-side">
          <NavLink to="/" className="nav-left-side-item">
            MELA STORE
          </NavLink>
        </div>
        {/* navbar for computer */}
        <div>
          <div className="nav-right-side-computer">
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
          {/* navbar for mobile */}
          <div className="nav-right-side-mobile">
            <AiOutlineMenuUnfold
              className="menu-icon"
              onClick={handleMenuOpen}
            />
            {open && (
              <div className="nav-mobile">
                <div className="cross-icon-div">
                  <GiCrossMark
                    className="cross-icon"
                    onClick={handleMenuClose}
                  />
                </div>
                <ul>
                  <li>
                    <NavLink
                      to="/home"
                      className="mobile-item"
                      onClick={handleMenuClose}
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className="mobile-item"
                      onClick={handleMenuClose}
                    >
                      PRODUCTS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact-us"
                      className="mobile-item"
                      onClick={handleMenuClose}
                    >
                      CONTACT
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/login"
                      className="login"
                      onClick={handleMenuClose}
                    >
                      LOGIN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cart"
                      className="cart"
                      onClick={handleMenuClose}
                    >
                      <MdOutlineShoppingBag />
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
