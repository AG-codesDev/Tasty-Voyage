import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex,dummy }) => {
  // console.log(data);
  const handleClick = ()=>{
    setShowIndex();
  }
  return (
    <div className="mb-5 bg-gray-100  items-center flex-col w-[75%] justify-center shadow-lg">
      {/* Accordion header */}
      <div className="flex justify-between  cursor-pointer mx-24 py-4 " onClick={handleClick}>
        <span className="font-bold text-2xl ">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-2xl">{showItems?"⬆️":"⬇️"}</span>
      </div>

        {showItems && <ItemList items={data?.itemCards} dummy={dummy} key={data?.title}/>}
    </div>
  );
};

export default RestaurantCategory;
