import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const CartEmptyMessage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" mt-32 flex items-center justify-center">
      <div className=" flex flex-col items-center">
        <h1 className="text-orange-500 font-bold text-center font-Poppins text-xl md:text-2xl">
          Cart is empty! PLZZ add something :)
        </h1>
        <img
          src="https://img.freepik.com/premium-vector/empty-cart_701961-7086.jpg"
          alt=""
        />
        <Link to={"/"}>
          <button className="bg-orange-500 rounded-md hover:bg-orange-600 transition-all text-white font-bold font-Poppins p-3">
            Explore Restaurants
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmptyMessage;
