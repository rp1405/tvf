import Tray from "./tray.jsx";
import Footer from "./footer.jsx";
import { useState } from "react";
function Menu({
  setIsCheck,
  countArr,
  setCountArr,
  foodsArr,
  amount,
  setAmount,
}) {
  function createTray(obj, ind) {
    return (
      <Tray
        key={obj._id}
        ind={ind}
        countArr={countArr}
        setCountArr={setCountArr}
        name={obj.name}
        price={obj.price}
        setAmount={setAmount}
        veg={obj.veg}
      />
    );
  }
  return (
    <div>
      <>{foodsArr.map(createTray)}</>
      <Footer amount={amount} setIsCheck={setIsCheck} />
    </div>
  );
}

export default Menu;
