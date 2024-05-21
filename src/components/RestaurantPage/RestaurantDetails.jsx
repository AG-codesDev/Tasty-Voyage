import React from "react";
import { FOOD_IMAGE } from "../../utils/Constants";

const RestaurantDetails = ({ resInfo }) => {
  // console.log(resInfo);
  const {
    name,
    cuisines,
    avgRating,
    areaName,
    totalRatingsString,
    cloudinaryImageId,
    costForTwoMessage,
    locality,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="flex w-full flex-col">
      <div className="resDetails  mt-5 mb-10 flex flex-col">
        <h1 className="font-Poppins my-2 ml-2 font-bold text-3xl">{name}</h1>
        <div className=" bg-gradient-to-t  from-gray-200 rounded-xl p-4">
          <div className="flex border-2 shadow-xl bg-white rounded-xl  gap-6">
            <div className="imgBox">
              <img
                src={FOOD_IMAGE + cloudinaryImageId}
                alt=""
                className="w-52 h-48 rounded-xl "
              />
            </div>
            <div className="otherDetails  justify-around text-lg font-Poppins font-medium flex flex-col">
              <div className=" flex font-bold gap-4">
                <span>⭐ {avgRating}</span>
                <span>({totalRatingsString})</span>
                <span>{costForTwoMessage}</span>
              </div>
              <div>
                <span>🍴 {cuisines.join(", ")}</span>
              </div>
              <div className="flex gap-2">
                <span>📍 {locality}</span>
                <span>({areaName})</span>
              </div>
              <div>
                <span>⌛ {sla.slaString}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
