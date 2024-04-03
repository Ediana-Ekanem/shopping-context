import PropTypes from "prop-types";

//first install --- npm install prop-types

const Card = ({ item, handleCount }) => {
  const { title, author, price, img } = item;
  return (
    <div>
      <div className="mb-20 hover:shadow-lg p-10  w-full max-w-72 hover:border-gray-300  hover:scale-105 transition-transform rounded-lg">
        <div className="flex flex-col justify-center">
          <img src={img} alt="image" />
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-gray-400">{author}</p>
            <p className="text-gray-400 font-bold">Price - {price}</p>
            <button
              className="bg-blue-300 text-white py-1 px-3 rounded font-semibold"
              onClick={() => handleCount(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }),
  handleCount: PropTypes.func.isRequired,
};

export default Card;
