import React, { useState } from "react";
import ShopData from "./shopData";
import { NavLink, useParams } from "react-router-dom";
const placeholder =
  "https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-store.png";

const BrowseShop = () => {
  return (
    <div className="browse-page pt-5">
      <header>
        <div className="container browse-header">
          <h1 className="p-5">Browse Shops Near You</h1>
        </div>
      </header>
      <div className="container">
        <div className="row mt-4">
          {ShopData.map((shop, index) => (
            <div className="col-md-3 mb-4">
              <div className="card">
                <div
                  className="fit-img img-top"
                  style={{
                    backgroundImage: `url('${
                      shop.image ? shop.image : placeholder
                    }')`,
                  }}
                ></div>
                <div className="card-body">
                  <h4>{shop.title}</h4>
                  <NavLink
                    className="btn btn-primary"
                    to={"/Browseproduct/" + index}
                  >
                    Order Now
                  </NavLink>
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
