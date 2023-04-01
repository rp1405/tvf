import Tray from "./tray.jsx";
import Footer from "./footer.jsx";
import { useState } from "react";
function Menu({ setIsCheck }) {
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState({});
  const dummy = [
    { name: "Pizza", price: 100, veg: 1 },
    { name: "Burger", price: 50, veg: 1 },
    { name: "Coffee", price: 10, veg: 1 },
    { name: "Dosa", price: 140, veg: 1 },
    { name: "Pasta", price: 40, veg: 1 },
    { name: "Roll", price: 100, veg: 1 },
    { name: "Sandwich", price: 100, veg: 1 },
    { name: "Sandwich", price: 100, veg: 1 },
    { name: "Sandwich", price: 100, veg: 1 },
    { name: "Sandwich", price: 100, veg: 1 },
    { name: "Sandwich", price: 100, veg: 1 },
    { name: "", price: "", veg: "" },
  ];
  function createMenu() {
    return dummy.map((e) => (
      <Tray
        name={e.name}
        price={e.price}
        veg={e.veg}
        setAmount={setAmount}
        setCart={setCart}
      />
    ));
  }
  return (
    <div>
      <>{createMenu()}</>
      <Footer amount={amount} setIsCheck={setIsCheck} />
    </div>
  );
}

export default Menu;
