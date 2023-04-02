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
        <div className="loader-line"></div>
      </div>
    );
  }

  const [countArr, setCountArr] = useState(null);

  useEffect(() => {
    getFoodsData().then((data) => {
      setfoodsArr(data);
      setCountArr(Array(data.length).fill(0));
      setIsLoading(0);
    });
  }, []);
  if (isCheck) {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <div>
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
