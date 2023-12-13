// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer2 from "./Shimmer2";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
  const dummy = "dummy data";
  const[showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer2 />;

  const { name, cuisines, avgRating, areaName, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards)

  const { cards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR;

  const categories = cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex  flex-col items-center">
      <div className="mx-40 my-10 flex justify-between w-1/2 px-10">
        <div className="right flex flex-col gap-2">
          <h1 className=" font-bold text-2xl px-1 ">{name}</h1>
          <span className="text-sm font-light">🍴 {cuisines.join(", ")}</span>
          <span className="text-sm font-light">📍 {areaName}</span>
        </div>
        <div className="left flex flex-col gap-2 border-2 border-gray-200 ">
          <span className="text-green-500 text-center">❇️ {avgRating}</span>
          <span className="border-b-2 border-gray-200 "></span>
          <span className="text-sm font-light">{totalRatingsString}</span>
        </div>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
