import React, { useRef } from "react";
import { FOOD_IMAGE } from "../utils/Constants";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const TopRestaurantChains = ({ topRestaurantHeader, topRestaurantChains }) => {
  const ScrollBar = useRef();
  console.log(topRestaurantChains);
  const scrollLeft = () => {
    ScrollBar.current.scrollLeft = ScrollBar.current.scrollLeft + 1100;
    // console.log(ScrollBar);
  };

  const scrollRight = () => {
    ScrollBar.current.scrollLeft = ScrollBar.current.scrollLeft - 1100;
    // console.log(ScrollBar);
  };
  return (
    <div className=" my-10  flex flex-col">
      <h1 className="font-bold text-2xl ml-3 font-Poppins">
        {topRestaurantHeader.title}
      </h1>
      <span className="flex gap-3 self-end">
        <span>
          <FaArrowLeft
            size={33}
            className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
            onClick={scrollRight}
          />
        </span>
        <span>
          <FaArrowRight
            FaArrowLeft
            size={33}
            className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
            onClick={scrollLeft}
          />
        </span>
      </span>
      <div
        className="flex flex-nowrap my-3 overflow-x-auto scroll-smooth no-scrollbar"
        ref={ScrollBar}
      >
        {topRestaurantChains.map((res) => (
          <div className="flex-grow-0 flex-shrink-0 basis-auto">
            <img
              src={FOOD_IMAGE + res.info.cloudinaryImageId}
              alt=""
              className="h-44 w-64 mx-4 rounded-xl "
            />
            <div className="ml-4 mt-2 font-Poppins font-medium text-gray-700 flex flex-col">
              <span>{res?.info?.name}</span>
              <span className="flex font-normal  items-center gap-1">
                <span className="text-base">❇️</span>{" "}
                <span className="text-sm"> {res?.info?.avgRating}</span>{" "}
                <span>
                  <GoDotFill size={10} />
                </span>
                <span className="text-sm">
                  <span>{res?.info?.sla?.slaString}</span>
                </span>
              </span>
              <span className="cuisines-text text-sm  h-5 w-60  overflow-hidden">
                {res?.info?.cuisines.join(", ")}
              </span>
              <span className="text-sm mt-1">{res.info.areaName}</span>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default TopRestaurantChains;
