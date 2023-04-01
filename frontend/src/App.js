import "./App.css";
import Menu from "./components/Menu.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/header.jsx";
import { useState, useEffect } from "react";
import { getFoodsData } from "./api/foodoptions";
function App() {
  // git is good

  const [isCheck, setIsCheck] = useState(0);
  const [countArr, setCountArr] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const [amount, setAmount] = useState(0);
  const [foodsArr, setfoodsArr] = useState([]);
  useEffect(() => {
    getFoodsData().then((data) => setfoodsArr(data));
  }, []);
  if (isCheck) {
    return (
      <div>
        <Header />
        <Checkout
          setIsCheck={setIsCheck}
          foodsArr={foodsArr}
          countArr={countArr}
          totalCost={amount}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Menu
          setIsCheck={setIsCheck}
          countArr={countArr}
          setCountArr={setCountArr}
          foodsArr={foodsArr}
          amount={amount}
          setAmount={setAmount}
        />
      </div>
    );
  }
}

export default App;
