import { useDispatch } from "react-redux";
import { ITEM_IMAGES } from "../utils/Constants";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const [itemAdded, setItemadded] = useState(false);

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item.card.info));
    // console.log(item);
    // console.log(item.card.info);
    setItemadded(true);
  };

  return (
    <div className=" flex flex-col">
      {items.map((item) => (
        <div
          className=" w-[80%] flex   flex-row justify-around mb-2 mx-auto my-2 "
          key={item.card.info.name}
        >
          <div className="item-description border-t-2 border-gray-200 p-5 flex flex-col gap-3 justify-center w-full ">
            <p className="veg-nonveg">
              {item.card.info.itemAttribute.vegClassifier === "NONVEG"
                ? "🔴"
                : "🟢"}
              <span className="item-name font-semibold text-xl">
                {" "}
                {item.card.info.name}
              </span>
            </p>
            <span className="item-price"> ₹ {item.card.info.price / 100}</span>
            <p className="item-quality text-xs ">
              {item.card.info.description}
            </p>
          </div>
          <div className="item-image h-52">
            <img
              src={ITEM_IMAGES + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-60 h-full  border-2 border-gray-200 rounded-2xl "
            />
            <button
              className="active:bg-black z-10 active:text-white p-2 relative bottom-10 left-14 mt-0 rounded-md bg-white text-green-600 transition duration-75 hover:text-base hover:scale-105 font-semibold"
              onClick={() => handleAddItem(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
