import { ITEM_IMAGES } from "../utils/Constants";

const ItemList = ({ items,dummy }) => {
  console.log(dummy);
  return (
    <div className=" flex flex-col">
      {items.map((item) => (
        <div className=" w-[80%] flex  flex-row justify-around mb-2 mx-auto my-2">
          <div className="item-description border-t-2 border-gray-300  p-5 flex  flex-col gap-3 justify-center w-full ">
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
          <div className="item-image ">
            <img
              src={ITEM_IMAGES + item.card.info.imageId}
              alt="Try it:))"
              className="w-48 h-36 border-2 border-gray-200 rounded-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
