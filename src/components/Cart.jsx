import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartProvider";

const Cart = () => {
  const [price, setPrice] = useState(0);

  const { cart, setCart, handleChange } = useContext(CartContext);

  const handlePrice = () => {
    let ans = 0;

    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  return (
    <div className="container mt-10 flex justify-center">
      <article className="">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-14 border-b  border-blue-500 mb-5 pb-5"
          >
            <div className="w-20 h-20">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold">{item.title}</p>
            <div className="flex space-x-2">
              <button
                className="bg-gray-300 py-1 px-3 rounded font-extrabold"
                onClick={() => handleChange(item, +1)}
              >
                +
              </button>
              <button className="bg-gray-300 py-1 px-3 rounded  font-semibold">
                {item.amount}
              </button>
              <button
                className="bg-gray-300 py-1 px-3 rounded  font-extrabold"
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
            </div>

            <div className=" flex items-center space-x-3">
              <div>
                <span className="bg-green-300 rounded px-2 py-1 font-semibold ">
                  {item.price}
                </span>
              </div>
              <button
                className="rounded font-bold bg-blue-300 py-1 px-3 text-white"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="space-x-5 text-xl">
          <span className="text-blue-500 font-bold">
            Total Price of your Cart
          </span>
          <span className="text-green-500 font-bold">Rs - {price}</span>
        </div>
      </article>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Cart;
