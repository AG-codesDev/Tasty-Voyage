import { useDispatch } from "react-redux";
import { FOOD_IMAGE } from "../../utils/Constants";
import { addItem } from "../../utils/cartSlice";
import { useState } from "react";
// import vegIcon from "../../assets/vegIcon"

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const [itemAdded, setItemadded] = useState(false);

  const handleAddItem = (item) => {
    // console.log(item);
    dispatch(addItem(item));
  };

  return (
    <>
      {items.length ? (
        <div className=" flex flex-col">
          {items.map((item) => (
            <div
              className="flex  flex-row w-full justify-around mb-2 mx-auto "
              key={item.card.info.name}
            >
              <div className="item-description  p-5 flex flex-col gap-3  w-full ">
                <div className="veg-nonveg flex flex-col gap-2">
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
                  <span className="item-name font-medium text-xl">
                    {" "}
                    {item.card.info.name}
                  </span>
                </div>
                <span className="item-price font-bold">
                  ₹{" "}
                  {item.card.info.defaultPrice
                    ? item.card.info.defaultPrice / 100
                    : item.card.info.price / 100}
                </span>
                <p className="item-quality text-xs ">
                  {item.card.info.description}
                </p>
              </div>
              <div className="item-image flex flex-col">
                <img
                  src={FOOD_IMAGE + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-72 h-44  rounded-2xl "
                />
                <button
                  className="relative bottom-6 shadow-lg active:bg-gray-200 transition-all bg-white text-green-600 rounded-xl font-bold p-2 w-fit mx-auto"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div
            className=" flex  flex-row justify-around mb-2 mx-auto my-2 "
            key={items.card.info.name}
          >
            <div className="item-description  p-5 flex flex-col gap-3 w-full ">
              <div className="veg-nonveg flex flex-col gap-2   ">
                {items.card.info.isVeg === 1 ? (
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
                <span className="item-name font-medium text-xl">
                  {" "}
                  {items.card.info.name}
                </span>
              </div>
              <span className="item-price font-bold">
                {" "}
                ₹{" "}
                {items.card.info.defaultPrice
                  ? items.card.info.defaultPrice / 100
                  : items.card.info.price / 100}
              </span>
              <p className="item-quality text-xs ">
                {items.card.info.description}
              </p>
            </div>
            <div className="item-image flex flex-col">
              <img
                src={FOOD_IMAGE + items.card.info.imageId}
                alt={items.card.info.name}
                className="w-72 h-44 rounded-2xl "
              />
              <button
                className="relative bottom-6 shadow-lg active:bg-gray-200 transition-all bg-white text-green-600 rounded-xl font-bold p-2 w-fit mx-auto"
                onClick={() => handleAddItem(items)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;
