import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { FOOD_IMAGE } from "../utils/Constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center flex flex-col items-center gap-2 mx-auto">
      <h1 className="text-2xl font-bold my-2">Cart</h1>
      <div className="">
        <button
          className="bg-black text-white p-2 active:bg-white active:text-black rounded-lg my-1"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your Cart is empty! PLZZ add something :)</h1>
        )}
      </div>

      {cartItems.map((cartData) => (
        <div className="singleCartCard  w-1/2 bg-slate-100 my-2 rounded-md  pl-2 text-lg flex items-center">
          <div className="name-price  w-[70%] flex flex-col">
            <span className="flex gap-2">
              {cartData.itemAttribute.vegClassifier === "NONVEG" ? "🔴" : "🟢"}
              <span>{cartData.name}</span>
            </span>

            <span className="flex">
              <span className="ml-2">Rs.</span> {cartData.price / 100}{" "}
            </span>

            <span className="text-sm text-gray-700 ml-2 text-start">
              {cartData.description}
            </span>
          </div>
          <div className="imgBox w-[30%] ">
            <img
              src={FOOD_IMAGE + cartData.imageId}
              alt=""
              className="h-44 w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
