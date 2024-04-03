import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import { CartContext } from "./store/CartProvider";

function App() {
  const { warning, show } = useContext(CartContext);

  return (
    <>
      <Navbar />
      {show ? <Amazon /> : <Cart />}

      <div className="relative top-0 ">
        {warning && (
          <div className="bg-red-600 text-white text-center p-4 rounded-lg shadow-md z-20 fixed top-0 left-0 w-full">
            <h1> Item is already added to your cart</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
