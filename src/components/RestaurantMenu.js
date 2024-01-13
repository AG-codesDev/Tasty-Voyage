// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer2 from "./Shimmer2";
import { useState } from "react";
import { ITEM_IMAGES } from "../utils/Constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
  const dummy = "dummy data";
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer2 />;

  const {
    name,
    cuisines,
    avgRating,
    areaName,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info;
  console.log(resInfo?.cards[0]?.card?.card?.info);

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
    <div className="flex  flex-col items-center ">
      <div className="mx-40 my-10 flex justify-between w-2/3 rounded-sm pr-4 shadow-lg bg-green-100 ">
        <div className="left flex flex-row gap-2 items-center justify-center">
          <div className="mr-4">
            <img
              src={ITEM_IMAGES + cloudinaryImageId}
              alt=""
              className="rounded-lg h-40"
            />
          </div>
          <div className="flex flex-col">
            <h1 className=" font-bold text-2xl px-1 ">{name}</h1>
            <span className="text-sm ">🍴 {cuisines.join(", ")}</span>
            <span className="text-sm ">📍 {areaName}</span>
          </div>
        </div>
        <div className="right flex flex-col gap-2 border-2 border-slate-500 h-20 self-center  ">
          <span className="text-green-800 text-center flex gap-1 mx-auto items-center">
            <span className="text-xl text-center">☆</span>{" "}
            <span>{avgRating}</span>
          </span>
          <span className="border-b-2 border-slate-400 "></span>
          <span className="text-sm text-orange-700">{totalRatingsString}</span>
        </div>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
