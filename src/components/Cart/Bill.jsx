import React from "react";
import { useSelector } from "react-redux";

const Bill = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const findTotalAmount = () => {
    let total_price = 0;
    for (const item of cartItems) {
      // console.log(item.card.info.price / 100);
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
    <div className="payment-details-container flex flex-col fixed ml-[65%] w-[30rem] mt-5 p-2">
      <div className="order-summary mb-3 flex border-b-2 p-2 justify-between">
        <span className="flex flex-col">
          <span className="text-2xl font-bold font-Poppins">Order Summary</span>
          <span className="text-green-600">Overall Savings ₹ 0</span>
        </span>
        <span>( {cartItems.length} items )</span>
      </div>

      <div className="order-value-shipping-Product-discount flex flex-col gap-2 mt-1 mb-8 border-b-2 p-2">
        <span className="flex justify-between">
          <span>Order Value</span>
          <span className="font-medium">₹ {findTotalAmount()}</span>
        </span>

        <span className="flex justify-between">
          <span>Delivery</span>
          <span className="text-green-500">FREE</span>
        </span>

        <span className="flex justify-between">
          <span>Product Discount</span>
          <span> - ₹ 0</span>
        </span>
      </div>

      <div className="grandTotal  flex flex-col gap-4 my-2">
        <span className="flex justify-between">
          <span className="font-bold text-xl font-Poppins">Grand Total</span>
          <span className="font-semibold text-lg font-Poppins">
            ₹ {findTotalAmount()}
          </span>
        </span>

        <button className="bg-orange-500 p-3 font-bold text-white w-full text-center font-Poppins rounded-sm">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Bill;
