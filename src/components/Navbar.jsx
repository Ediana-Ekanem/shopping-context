import { FaCartPlus } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../store/CartProvider";

const Navbar = () => {
  const { cart, setShow } = useContext(CartContext);
  return (
    <>
      <nav className="bg-blue-200 text-white  text-2xl py-3 font-semibold font-[Recursive] w-full sticky top-0">
        <div className="flex justify-between items-center container">
          <h1 className="cursor-pointer" onClick={() => setShow(true)}>
            My Shopping
          </h1>
          <div className="relative ">
            <FaCartPlus
              className="cursor-pointer"
              onClick={() => setShow(false)}
            />
            <span className=" text-[16px] text-red-500 font-bold absolute bottom-1 left-5">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  size: PropTypes.number.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Navbar;
