import { useFormik } from "formik";
import React from "react";
import { useState } from "react";

const Checkout = () => {
  const [productList, setProducts] = useState(
    JSON.parse(sessionStorage.getItem("products"))
  );

  const calculateTotal = () => {
    let total = 0;
    productList.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  const addOrder = async () => {
    const response = await fetch("http://localhost:5000/order/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productList),
    });
    const data = await response.json();
    console.log(data);
  };

  const orderForm = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      username: "",
      useraddress: "",
    },

    onSubmit: (values) => {
      console.log(values);
      addOrder();
    },
  });

  return (
    <div>
      <div className="container">
        <h1>Order Summary</h1>
        <hr />
        <div className="row">
          {productList.map((product) => (
            <div className="col-md-3">
              <div className="card">
                <img src={product.image} alt="" />
                <div className="card-body">
                  <h4>{product.name}</h4>
                  <h5>Price: {product.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />

        <h3>Total Amount : {calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Checkout;
