import React from "react";
import "./tray.css";
import { useState } from "react";
export default function Tray({
  name,
  price,
  setAmount,
  ind,
  countArr,
  setCountArr,
}) {
  const [count, setCount] = useState(countArr[ind]);
  var vegNonveg = "";
  var veg = 1;
  if (veg) {
    vegNonveg = "../../assets/veg-icon.svg";
  } else {
    vegNonveg = "../../assets/non-veg-icon.svg";
  }
  const incrementCount = () => {
    setCount(count + 1);
    setCountArr((pre) => {
      pre[ind] = count + 1;
      return { ...pre };
    });
    setAmount((pre) => pre + price);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setCountArr((pre) => {
        pre[ind] = count - 1;
        return { ...pre };
      });
      setAmount((pre) => pre - price);
    }
  };
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
          <button className="button bleft" onClick={decrementCount}>
            -
          </button>
          <button className="button">{count}</button>
          <button className="button bright" onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
