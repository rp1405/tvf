import React from "react";
import "./tray.css";
import { useState } from "react";
export default function Tray({ name, price, veg }) {
  const [count, setCount] = useState(0);
  var vegNonveg = "";
  if (veg) {
    vegNonveg = "../../assets/veg-icon.svg";
  } else {
    vegNonveg = "../../assets/non-veg-icon.svg";
  }
  function press(btn) {
    if (btn === "minus") {
      if (count > 0) {
        setCount(count - 1);
      }
    } else {
      setCount(count + 1);
    }
  }
  return (
    <div className="supermaindiv">
      <div className="maindiv">
        <div className="detail-div">
          <div className="vegNonVeg">
            <img src={vegNonveg}></img>
          </div>
          <div className="name">
            <h1>{name}</h1>
          </div>
          <div className="price">
            <h1>Rs {price}</h1>
          </div>
        </div>
        <div className="button-div">
          <button className="button bleft" onClick={() => press("minus")}>
            -
          </button>
          <button className="button">{count}</button>
          <button className="button bright" onClick={() => press("plus")}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thebossykitchen.com%2Fauthentic-traditional-turkish-coffee%2F&psig=AOvVaw0bgskuMQVwuonf__YkTkK0&ust=1680271039341000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCEncXng_4CFQAAAAAdAAAAABAE
