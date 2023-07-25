import React, { useEffect, useState } from "react";

const ViewOrders = () => {
  const [orderList, setOrderList] = useState([]);

  const fetchOrders = async () => {
    const response = await fetch("http://localhost:5000/order/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setOrderList(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const displayOrders = () => {
    return orderList.map((order) => (
      <div className="mb-4">
        <div className="card">
          <div className="card-body">
            <h3>Products Ordered</h3>
            <div className="row">
              {order.items.map((orderdproduct) => (
                <div className="col-md-2">
                  <img className="img-fluid" src={orderdproduct.image} alt="" />
                  <h5>{orderdproduct.name}</h5>
                  <p>₹{orderdproduct.price}</p>
                </div>
              ))}
            </div>
            <hr />
            <h4>Ordered By : {order.username}</h4>
            <h5>Payable Amount: ₹{order.totalAmt}</h5>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1 className="my-5 text-center">View Placed Orders</h1>
      <hr />
      <div className="container">{displayOrders()}</div>
    </div>
  );
};

export default ViewOrders;
