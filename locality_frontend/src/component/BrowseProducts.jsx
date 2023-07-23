import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShopData from "./shopData";
const placeholder = 'https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-store.png';


const BrowseProducts = () => {
  const { index } = useParams();
  console.log(ShopData);
  const [selShop, setSelShop] = useState(ShopData[index]);

  const showProducts = () => {
    return (
      <div className="row">
        {selShop.items.map((product) => (
          <div className="col-md-3">
            <div className="card">
              <img src={product.image ? product.image : placeholder} alt="" />
              <div className="card-body">
                <h4>{product.title}</h4>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <div>
    <header>
        <h1>Shop Products from {selShop.title}</h1>
        <hr />
        {showProducts()}
    </header>
  </div>;
};

export default BrowseProducts;
