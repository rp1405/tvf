import "./App.css";
import Menu from "./components/Menu.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/header.jsx";
import { useState } from "react";
function App() {
  const [isCheck, setIsCheck] = useState(0);
  if (isCheck) {
    return (
      <div>
        <Header />
        <Checkout setIsCheck={setIsCheck} />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Menu setIsCheck={setIsCheck} />
      </div>
    );
  }
}

export default App;
