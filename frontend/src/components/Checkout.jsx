import React, { useState } from "react";
import "./Checkout.css";
import axios from "axios";

function Checkout({ setIsCheck, foodsArr, countArr, totalCost }) {
  console.log(totalCost);
  const checkoutHandler = async () => {
    // const {
    //   data: { key },
    // } = await axios.get("http://localhost:3000/api/v1/getkey");

    const key = "rzp_test_AM28Y3V37lYCr0";
    const items = {};
    foodsArr.forEach((obj, ind) => {
      if (countArr[ind] > 0) {
        items[obj.name] = countArr[ind];
      }
    });
    const amount = totalCost;
    const {
      data: { order },
    } = await axios.post("http://localhost:3000/api/v1/checkout", {
      amount,
      items,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "TVF",
      description: "description",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:3000/api/v1/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  function onClick() {
    setIsCheck(0);
  }
  function ListItem({ itemName, itemCount, itemPrice }) {
    return (
      <div className="listItem">
        <div className="itemName">
          <h1>{itemName}</h1>
        </div>
        <div className="itemCount">
          <h1>x {itemCount}</h1>
        </div>
        <div className="itemPrice">
          <h1>₹ {itemPrice * itemCount}</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="summOutDiv">
      <div>
        <button className="back-button" onClick={() => onClick()}></button>
      </div>
      <div className="summaryDiv">
        <div className="summary">
          <h1>Order Summary</h1>
        </div>
        <div>
          {foodsArr.map((item, ind) => {
            if (countArr[ind] > 0) {
              return (
                <ListItem
                  itemName={foodsArr[ind].name}
                  itemCount={countArr[ind]}
                  itemPrice={foodsArr[ind].price}
                />
              );
            }
          })}
        </div>
        <hr></hr>
        <div className="subTotal">
          <h1>Subtotal: ₹ {totalCost}</h1>
        </div>
      </div>
      <button className="payNow" onClick={checkoutHandler}>
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;
