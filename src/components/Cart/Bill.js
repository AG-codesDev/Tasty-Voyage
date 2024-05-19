import React from "react";
import { useSelector } from "react-redux";

const Bill = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const findTotalAmount = () => {
    let total_price = 0;
    for (const item of cartItems) {
      console.log(item.card.info.price / 100);
      total_price =
        total_price +
        (item.card.info.defaultPrice
          ? item.card.info.defaultPrice / 100
          : item.card.info.price / 100);
    }
    // console.log(total_price);
    return total_price;
  };
  return (
    <div
      className="payment-details w-96 items-center fixed flex flex-col gap-5 p-3 b bg-gradient-to-t  from-gray-300 
      rounded-xl ml-[65%] mt-5"
    >
      <div className="flex flex-col gap-5 items-center justify-center w-full bg-white p-2">
        <div className="tems-center fixed flex flex-col gap-5 "></div>
        <h1 className="font-bold text-2xl">Bill Details</h1>
        <div className="text-lg font-Poppins font-medium flex flex-col border-b-2 border-black">
          <span className="total-items">No. of Items: {cartItems.length}</span>
          <span className="total-items">
            Item Totals: ₹ {findTotalAmount()}
          </span>
        </div>
        <div className="text-xl font-Poppins font-medium flex flex-col">
          Amount to Pay: ₹ {findTotalAmount()}
        </div>
        <div className="payment-button bg-orange-500 cursor-pointer hover:bg-orange-600 transition-all text-white p-2 rounded-md my-2 w-full text-center font-Poppins self-center">
          Pay Now
        </div>
      </div>
    </div>
  );
};

export default Bill;
