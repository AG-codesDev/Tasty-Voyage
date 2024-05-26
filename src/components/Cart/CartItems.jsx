import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOOD_IMAGE } from "../../utils/Constants";
import { clearCart, removeItem } from "../../utils/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const handleDeleteClick = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-items flex flex-col  w-[60%]">
      <div className=" justify-between ml-6 items-center flex">
        <h2 className="font-medium text-2xl font-Poppins">CART 🛒</h2>
        <button
          className="bg-orange-500 hover:bg-orange-600 transition-all text-white p-2 rounded-lg my-2 w-fit self-center"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.map((item) => (
        <div className="single-item w-full flex my-2" key={item.card.info.id}>
          <div className="imgBox flex flex-col items-center w-1/4">
            <img
              src={FOOD_IMAGE + item.card.info.imageId}
              alt=""
              className="h-44 w-44 rounded-lg"
            />
            <button
              className="relative bottom-4 shadow-lg active:bg-gray-200 hover:bg-gray-100 transition-all bg-white text-red-500 rounded-xl font-medium p-2 w-fit mx-auto"
              onClick={() => handleDeleteClick(item)}
            >
              Delete
            </button>
          </div>
          <div className="otherDetails w-3/4">
            <div className="flex gap-2">
              {item.card.info.isVeg === 1 ? (
                <img
                  src="https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png"
                  className="h-4 w-4 mt-1"
                ></img>
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
                  className="h-6 w-6"
                ></img>
              )}
              <span className=" text-lg font-Poppins">
                <span className="text-lg font-medium">
                  {item.card.info.name} -
                </span>
                <span className="text-sm"> {item.card.info.category}</span>
              </span>
            </div>
            <span className="font-bold text-lg price flex mt-1">
              <span className=" font-Poppins">Rs.</span>{" "}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </span>
            <span className="text-sm text-gray-700">
              {item.card.info.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
