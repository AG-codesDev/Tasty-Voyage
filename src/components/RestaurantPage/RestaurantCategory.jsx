import { useState } from "react";
import ItemList from "./ItemList";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const RestaurantCategory = ({ data }) => {
  // console.log(data);
  // console.log(data.categories);
  // console.log(data.itemCards);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCategoryClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`p-3 my-1 tranition-all items-center flex-col w-full justify-center ${
        isMenuOpen ? "bg-slate-50 " : "shadow-md"
      }`}
    >
      {/* Accordion header */}

      {data.categories && (
        <div className="">
          <span
            className="font-semibold  p-2 cursor-pointer font-Poppins text-xl w-full flex justify-between "
            onClick={handleCategoryClick}
          >
            <span>{data?.title}</span>
            <span>{isMenuOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
          </span>
          {data.categories && isMenuOpen && (
            <div>
              {data.categories.map((items, index) => (
                <ItemList items={items.itemCards} key={index} />
              ))}
            </div>
          )}
        </div>
      )}

      <div>
        {data.itemCards && (
          <div className="">
            <span
              className="font-semibold p-2 cursor-pointer font-Poppins text-xl  w-full flex justify-between "
              onClick={handleCategoryClick}
            >
              <span>
                {data?.title} ({data?.itemCards?.length})
              </span>
              <span>{isMenuOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
            </span>
            {data.itemCards && isMenuOpen && (
              <div>
                {data.itemCards.map((items, index) => (
                  <ItemList items={items} key={index} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
