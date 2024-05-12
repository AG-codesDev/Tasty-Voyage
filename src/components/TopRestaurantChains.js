import React, { useRef } from "react";
import { FOOD_IMAGE } from "../utils/Constants";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const TopRestaurantChains = ({ topRestaurantHeader, topRestaurantChains }) => {
  // console.log(topRestaurantChains);
  const ScrollBar = useRef();
  const scrollLeft = () => {
    ScrollBar.current.scrollLeft = ScrollBar.current.scrollLeft + 1210;
  };

  const scrollRight = () => {
    ScrollBar.current.scrollLeft = ScrollBar.current.scrollLeft - 1210;
  };
  return (
    <div className=" my-10 flex flex-col">
      <div className="flex justify-between">
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
              size={33}
              className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              onClick={scrollLeft}
            />
          </span>
        </span>
      </div>
      <div
        className="flex flex-nowrap mt-5 overflow-x-auto scroll-smooth no-scrollbar"
        ref={ScrollBar}
      >
        {topRestaurantChains.map((res) => (
          <div
            className="flex-grow-0 w-1/4 flex-shrink-0 hover:scale-95 transition-all cursor-pointer basis-auto"
            key={res.info.id}
          >
            <Link to={"/restaurant/" + res.info.id}>
              <div>
                <img
                  src={FOOD_IMAGE + res.info.cloudinaryImageId}
                  alt=""
                  className="h-44 w-[90%] mx-4 rounded-xl"
                />
                <div className="ml-5 mt-2 font-Poppins font-medium text-gray-700 flex flex-col">
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurantChains;
