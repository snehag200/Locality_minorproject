import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShopData from "./shopData";
const placeholder =
  "https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-store.png";

const BrowseProducts = () => {
  const { index } = useParams();

  const navigate = useNavigate();
  console.log(ShopData);
  const [selShop, setSelShop] = useState(ShopData[index]);

  const [selProducts, setSelProducts] = useState([]);

  const checkout = () => {
    sessionStorage.setItem("products", JSON.stringify(selProducts));
    navigate("/checkout");
  };

  const selectProduct = (product) => {
    setSelProducts([...selProducts, product]);
  };

  const showProducts = () => {
    return (
      <div className="row">
        {selShop.items.map((product) => (
          <div className="col-md-3">
            <div className="card">
              <img src={product.image ? product.image : placeholder} alt="" />
              <div className="card-body">
                <h4>{product.name}</h4>
                <h5>Price: ₹{product.price}</h5>
                <button
                  disabled={selProducts.find(
                    (prod) => prod.name === product.name
                  )}
                  onClick={() => selectProduct(product)}
                  className="btn btn-primary"
                >
                  {selProducts.find((prod) => prod.name === product.name)
                    ? "Selected"
                    : "Select"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-5">
      <header>
        <div className="container browse-shop-header">
          <h1 className="p-5 text-center">
            Shop Products from {selShop.title}
          </h1>
        </div>
      </header>
      <div className="container">
        <button onClick={checkout} className="btn btn-lg btn-dark my-4">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Proceed to Checkout
        </button>

        {showProducts()}
      </div>
    </div>
  );
};

export default BrowseProducts;
