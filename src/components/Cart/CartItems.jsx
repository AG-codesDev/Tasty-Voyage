import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOOD_IMAGE } from "../../utils/Constants";
import { clearCart, removeItem } from "../../utils/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleDeleteClick = (item) => {
    dispatch(removeItem);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-items flex flex-col  w-[60%] my-2">
      <div className=" justify-between my-3 items-center flex">
        <h2 className="font-bold text-xl font-Poppins  bg-slate-100 p-2">
          Your Cart 🛒
        </h2>
        <button
          className="bg-orange-500 hover:bg-orange-600 transition-all text-white p-2 rounded-lg my-2 w-fit self-center"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.map((item) => (
        <div className="singleCartCard border-b-2 border-gray-400 justify-between pl-2 text-lg flex items-center">
          <div className="name-price  flex flex-col">
            <div className="flex gap-2">
              {item.card.info.isVeg === 1 ? (
                <img
                  src="https://www.clipartmax.com/png/middle/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png"
                  className="h-6 w-6"
                ></img>
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
                  className="h-8 w-8"
                ></img>
              )}
              <span className="font-medium font-Poppins text-xl">
                {item.card.info.name}
              </span>
            </div>

            <span className="flex mt-1">
              <span className=" font-Poppins">Rs.</span>{" "}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </span>

            <span className="text-sm text-gray-700 ml-2 text-start">
              {item.description}
            </span>
          </div>
          <div className="imgBox flex flex-col items-center justify-center ">
            <img
              src={FOOD_IMAGE + item.card.info.imageId}
              alt=""
              className="h-24 w-32 rounded-lg"
            />
            <button
              className="relative bottom-6 shadow-lg active:bg-gray-200 transition-all bg-white text-red-500 rounded-xl font-medium p-2 text-sm w-fit mx-auto"
              onClick={() => handleDeleteClick(item)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
