import "./App.css";
import Tray from "./components/tray.jsx";
function App() {
  const dummy = [
    { name: "rohan", price: 1000, veg: 1 },
    { name: "Pareek", price: 500, veg: 0 },
    { name: "gems", price: 10, veg: 1 },
    { name: "potty", price: 14000, veg: 0 },
    { name: "dosa", price: 4000, veg: 0 },
    { name: "yuvraj", price: 100, veg: 1 },
    { name: "rohan", price: "1000", veg: 1 },
    { name: "rohan", price: "1000", veg: 1 },
    { name: "rohan", price: "1000", veg: 1 },
    { name: "rohan", price: "1000", veg: 1 },
    { name: "rohan", price: "1000", veg: 1 },
    { name: "rohan", price: "1000", veg: 1 },
    { name: "rohan", price: "1000", veg: 1 },
    { name: "tanvi", price: "0", veg: 0 },
  ];
  return dummy.map((e) => <Tray name={e.name} price={e.price} veg={e.veg} />);
}

export default App;
