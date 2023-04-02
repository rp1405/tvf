import React, { useState } from "react";
import "./Checkout.css";
import axios from "axios";
import { BASE_URL } from "../config";
function Checkout({ setIsCheck, foodsArr, countArr, totalCost }) {
  console.log(totalCost);
  const [isLoading, setIsLoading] = useState(0);
  function Loader() {
    return (
      <div className="loader">
        <img className="loadingImage" src="../../assets/truckGif.gif"></img>
        <div className="loader-line"></div>
      </div>
    );
  }

  const checkoutHandler = async () => {
    setIsLoading(1);
    const {
      data: { key },
    } = await axios.get(`${BASE_URL}/api/v1/getkey`);

    const items = {};
    foodsArr.forEach((obj, ind) => {
      if (countArr[ind] > 0) {
        items[obj.name] = countArr[ind];
      }
    });
    const amount = totalCost;
    const {
      data: { order },
    } = await axios.post(`${BASE_URL}/api/v1/checkout`, {
      amount,
      items,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "TVF",
      description: "description",
      image: "../../assets/logo.png",
      order_id: order.id,
      callback_url: `${BASE_URL}/api/v1/paymentverification`,
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

  if (isLoading) {
    return <Loader />;
  } else {
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
                    key={item._id}
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
}

export default Checkout;
