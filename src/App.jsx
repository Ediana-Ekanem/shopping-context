import { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import { CartContext, CartProvider } from "./store/CartProvider";

function App() {
  const { warning, show } = useContext(CartContext);

  // const [cart, setCart] = useState([]);

  // const handleCount = (item) => {
  //   let isPresent = false;
  //   cart.forEach((product) => {
  //     if (item.id === product.id) isPresent = true;
  //   });

  //   if (isPresent) {
  //     setWarning(true);
  //     setTimeout(() => {
  //       setWarning(false);
  //     }, 2000);
  //     return;
  //   }
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   let ind = -1;
  //   cart.forEach((data, index) => {
  //     if (data.id === item.id) ind = index;
  //   });

  //   const tempArr = cart;
  //   tempArr[ind].amount += d;
  //   if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;

  //   setCart([...tempArr]);
  // };

  return (
    <CartProvider>
      <Navbar />
      {show ? <Amazon /> : <Cart />}

      <div className="relative top-0 ">
        {warning && (
          <div className="bg-red-600 text-white text-center p-4 rounded-lg shadow-md z-20 fixed top-0 left-0 w-full">
            <h1> Item is already added to your cart</h1>
          </div>
        )}
      </div>
    </CartProvider>
  );
}

export default App;
