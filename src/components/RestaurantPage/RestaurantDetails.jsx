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
  console.log(resInfo?.cards[2]?.card?.card?.info);
  return (
    <div className="flex w-full flex-col">
      <div className="resDetails  mt-5 mb-10 flex flex-col">
        <h1 className="font-Poppins my-2 ml-2 font-bold text-3xl">{name}</h1>
        <div className=" bg-gradient-to-t  from-gray-200 rounded-xl p-4">
          <div className="flex border-2 shadow-xl lg:flex-row flex-col bg-white rounded-xl  gap-6">
            <div className="imgBox">
              <img
                src={FOOD_IMAGE + cloudinaryImageId}
                alt=""
                className="w-full h-60 lg:w-52 lg:h-48 rounded-xl "
              />
            </div>
            <div className="otherDetails gap-2 justify-around text-lg font-Poppins font-medium flex flex-col">
              <div className="flex font-semibold lg:font-bold  gap-1 lg:gap-4">
                <span>⭐ {avgRating}</span>
                <span>({totalRatingsString})</span>
                <span>{costForTwoMessage}</span>
              </div>
              <div>
                <span>🍴 {cuisines.join(", ")}</span>
              </div>
              <div className="flex gap lg:flex-row flex-col">
                <span>📍 {locality}</span>
                <span>({areaName})</span>
              </div>
              {sla.slaString && (
                <div>
                  <span>⌛ {sla.slaString}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
