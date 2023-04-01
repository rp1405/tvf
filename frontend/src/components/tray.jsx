import React from "react";
import "./tray.css";
import { useState } from "react";
export default function Tray({ name, price, veg, setAmount, setCart }) {
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
        setAmount((pre) => pre - price);
        setCart((prevItems) => {
          if (count == 1) {
            delete prevItems[name];
            return { ...prevItems };
          } else {
            prevItems[name] = count - 1;
            return { ...prevItems };
          }
        });
      }
    } else {
      setCount(count + 1);
      setAmount((pre) => pre + price);
      setCart((prevItems) => {
        prevItems[name] = count + 1;
        return { ...prevItems };
      });
    }
  }
  return (
    <div className="supermaindiv">
      <div className="maindiv">
        <div className="detail-div">
          <div className="vegNonVeg">
            <img className="image" src={vegNonveg}></img>
          </div>
          <div className="name">
            <h1>{name}</h1>
          </div>
          <div className="price">
            <h1>₹ {price}</h1>
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
