import React, { useState } from "react";
import ShopData from "./shopData";
import { NavLink, useParams } from "react-router-dom";
const placeholder =
  "https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-store.png";

const BrowseShop = () => {
  return (
    <div>
      <header>
        <div className="container py-5">
          <h1>Browse Shops near You</h1>
        </div>
      </header>
      <div className="container">
        <div className="row">
          {ShopData.map((shop, index) => (
            <div className="col-md-3">
              <div className="card">
                <img src={shop.image ? shop.image : placeholder} alt="" />
                <div className="card-body">
                  <h4>{shop.title}</h4>
                  <NavLink className="btn btn-primary" to={'/Browseproduct/'+index}>Order Now</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseShop;
