import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {

  const navigate = useNavigate();

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

  const addOrder = async (values) => {
    const response = await fetch("http://localhost:5000/order/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log(data);
    sessionStorage.removeItem("products");
    navigate("/orders");
    Swal.fire({
      title: "Order Placed Successfully",
      text: "Thank You for your order",
      icon: "success",
    })
  };

  const orderForm = useFormik({
    initialValues: {
      items: productList,
      totalAmt: calculateTotal(),
      username: "",
      useraddress: "",
    },

    onSubmit: (values) => {
      console.log(values);
      addOrder(values);
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
                  <h5>Price: ₹{product.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />

        <h3>Total Amount : ₹{calculateTotal()}</h3>
        <hr />
        <form onSubmit={orderForm.handleSubmit}>
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            onChange={orderForm.handleChange}
            value={orderForm.values.username}
          />

          <label htmlFor="">User Address</label>
          <textarea
            type="text"
            name="useraddress"
            className="form-control mb-3"
            rows={4}
            onChange={orderForm.handleChange}
            value={orderForm.values.useraddress}
          ></textarea>
          <button className="btn btn-primary mt-5">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
