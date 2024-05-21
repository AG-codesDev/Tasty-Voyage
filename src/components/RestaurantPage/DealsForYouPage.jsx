import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FOOD_IMAGE } from "../../utils/Constants";
import { useRef } from "react";

const DealsForYouPage = ({ resInfo }) => {
  const dealsScrollBar = useRef();

  const { offers } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;
  const scrollDealsLeft = () => {
    dealsScrollBar.current.scrollLeft =
      dealsScrollBar.current.scrollLeft + 1210;
  };

  const scrollDealsRight = () => {
    dealsScrollBar.current.scrollLeft =
      dealsScrollBar.current.scrollLeft - 1210;
  };
  return (
    <div className="dealsForYou ">
      <div className="flex justify-between my-2">
        <h2 className="self-start font-bold text-2xl font-Poppins">
          Deals for you
        </h2>
        <div className="flex gap-2">
          <span>
            <FaArrowLeft
              size={33}
              className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              onClick={scrollDealsRight}
            />
          </span>
          <span>
            <FaArrowRight
              size={33}
              className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              onClick={scrollDealsLeft}
            />
          </span>
        </div>
      </div>
      <div
        className=" flex flex-nowrap overflow-x-auto scroll-smooth no-scrollbar gap-5"
        ref={dealsScrollBar}
      >
        {offers.map((offer) => (
          <div
            className=" border-2 flex-shrink-0 flex-grow-0 basis-auto rounded-xl py-3 px-8 flex items-center gap-3"
            key={offer.info.offerIds[0]}
          >
            <div className="imgBox">
              <img
                src={FOOD_IMAGE + offer.info.offerLogo}
                alt=""
                className="h-16 w-16"
              />
            </div>
            <div className="flex flex-col font-Poppins">
              <span className="font-bold text-lg">{offer.info.header}</span>
              <span className="text-gray-600">{offer.info.couponCode}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsForYouPage;
