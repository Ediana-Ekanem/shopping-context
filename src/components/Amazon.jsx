import { useContext } from "react";
import list from "../data";
import Card from "./Card";
import PropTypes from "prop-types";
import { CartContext } from "../store/CartProvider";

const Amazon = () => {
  const { cart, setCart, setWarning } = useContext(CartContext);
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

  return (
    <>
      <section className="container mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
          {list.map((item) => (
            <Card key={item.id} item={item} handleCount={handleCount} />
          ))}
        </div>
      </section>
    </>
  );
};

Amazon.propTypes = {
  handleCount: PropTypes.func.isRequired,
};

export default Amazon;
