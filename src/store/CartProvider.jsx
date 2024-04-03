import PropTypes from "prop-types"; // Import PropTypes
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleCount = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;

    setCart([...tempArr]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleCount,
        handleChange,
        warning,
        setWarning,
        show,
        setShow,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node and is required
};
