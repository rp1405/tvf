import React from "react";
import "./footer.css";
import { useState } from "react";
export default function Footer({ amount, setIsCheck }) {
  function onClick() {
    if (amount == 0) {
      alert("Please select some items");
      return;
    }
    setIsCheck(1);
  }
  return (
    <div className="footMainDiv">
      <div>
        <div className="totalAmount">
          <h1>Total Amount</h1>
        </div>
        <div className="amount">
          <h1>₹ {amount}</h1>
        </div>
      </div>
      <div className="amountAndButton">
        <div>
          <button className="proceedButton" onClick={() => onClick()}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
