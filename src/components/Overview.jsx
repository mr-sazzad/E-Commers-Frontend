import React from "react";
import { NavLink } from "react-router-dom";
import iphone from "../../src/assets/iphone.jpg";
import Featured from "./Featured";

const Overview = () => {
  return (
    <div>
      <div className="overview-section">
        <div className="para-section">
          <p className="welcome">welcome to</p>
          <h1 className="store">MELA STORE</h1>
          <p className="main-para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            magni et reiciendis? Ducimus molestiae deserunt tempora illum
            impedit ab, voluptatibus deleniti.
          </p>
          <NavLink to="/products">
            <button type="button" className="shop-button">
              SHOP NOW
            </button>
          </NavLink>
        </div>
        <div className="image-section">
          <img src={iphone} className="overview-img" />
          <div className="back-banner"></div>
        </div>
      </div>
      <Featured />
    </div>
  );
};

export default Overview;

// const Wrapper = styled.div``;
