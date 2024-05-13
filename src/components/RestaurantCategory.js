import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  // console.log(data.categories);
  // console.log(data.itemCards);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCategoryClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mb-5 bg-gray-100 items-center flex-col w-full justify-center shadow-lg">
      {/* Accordion header */}
      <div
        className="flex justify-between cursor-pointer mx-24 py-4 "
        onClick={handleCategoryClick}
      >
        {data.categories && (
          <span className="font-bold text-2xl w-full flex justify-between ">
            <span>{data?.title}</span>
            <span>{isMenuOpen ? "⬆️" : "⬇️"}</span>
            {data.categories && isMenuOpen && (
              <div>
                {data.categories.map((items) => (
                  <ItemList items={items.itemCards} />
                ))}
              </div>
            )}
          </span>
        )}

        {data.itemCards && (
          <>
            <span className="font-bold text-2xl w-full flex justify-between ">
              <span>
                {data?.title} ({data?.itemCards?.length})
              </span>
              <span>{isMenuOpen ? "⬆️" : "⬇️"}</span>
            </span>
            {data.itemCards && isMenuOpen && (
              <div>
                {data.itemCards.map((items) => (
                  <ItemList items={items} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
