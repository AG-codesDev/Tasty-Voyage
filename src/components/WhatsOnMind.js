import React from "react";
import { FOOD_IMAGE } from "../utils/Constants";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
const WhatsOnMind = ({ foodItemImages, foodItemsHeader }) => {
  const ScrollBar = useRef();

  const scrollLeft = () => {
    ScrollBar.current.scrollLeft = ScrollBar.current.scrollLeft + 1100;
    // console.log(ScrollBar);
  };

  const scrollRight = () => {
    ScrollBar.current.scrollLeft = ScrollBar.current.scrollLeft - 1100;
    // console.log(ScrollBar);
  };
  return (
    <div className="food-items">
      <h1 className="font-bold text-2xl ml-3 font-Poppins">
        {foodItemsHeader.title}
      </h1>
      <div className=" flex flex-col ">
        <div className="flex gap-3 self-end">
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
        </div>
        <div
          className="flex overflow-x-scroll scroll-smooth no-scrollbar"
          ref={ScrollBar}
        >
          {foodItemImages.map((item) => (
            <img
              src={FOOD_IMAGE + item.imageId}
              key={item.id}
              className="h-48 w-48"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsOnMind;
