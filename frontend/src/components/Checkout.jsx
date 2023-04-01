import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ setIsCheck }) {
  function onClick() {
    setIsCheck(0);
  }
  return (
    <div className="summOutDiv">
      <div>
        <button className="back-button" onClick={() => onClick()}></button>
      </div>
      <div className="summaryDiv">
        <div className="summary">
          <h1>Order Summary</h1>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
