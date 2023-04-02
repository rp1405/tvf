import "./App.css";
import Menu from "./components/Menu.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/header.jsx";
import { useState, useEffect } from "react";
import { getFoodsData } from "./api/foodoptions";
function App() {
  const [isLoading, setIsLoading] = useState(1);
  const [isCheck, setIsCheck] = useState(0);

  const [amount, setAmount] = useState(0);
  const [foodsArr, setfoodsArr] = useState([]);
  function Loader() {
    return (
      <div className="loader">
        <img className="loadingImage" src="../../assets/truckGif.gif"></img>
        <div class="loader-line"></div>
      </div>
    );
  }
  useEffect(() => {
    getFoodsData().then((data) => setfoodsArr(data));
    const timer = setTimeout(() => {
      setIsLoading(0);
    }, 3000);
  }, []);
  const len = foodsArr.length;
  const [countArr, setCountArr] = useState(Array(200).fill(0)); //Hardcoded array size
  console.log(countArr);
  if (isCheck) {
    if (isLoading) {
      return <Loader />;
    } else {
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
    }
  } else {
    if (isLoading) {
      return <Loader />;
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
}

export default App;
