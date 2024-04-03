import PropTypes from "prop-types"; // Import PropTypes
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
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
