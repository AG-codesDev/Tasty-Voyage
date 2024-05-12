import React from "react";
import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FOOD_IMAGE } from "../../utils/Constants";

const TopPicksPage = ({ resInfo }) => {
  const topPicksScrollBar = useRef();

  const { card } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card;
  // console.log(card);

  const { carousel } = card;
  //   console.log(carousel);

  const scrollTopPicksLeft = () => {
    topPicksScrollBar.current.scrollLeft =
      topPicksScrollBar.current.scrollLeft + 1210;
  };

  const scrollTopPicksRight = () => {
    topPicksScrollBar.current.scrollLeft =
      topPicksScrollBar.current.scrollLeft - 1210;
  };
  return (
    carousel && (
      <div className="TopPicks my-5">
        <div className="flex justify-between my-2">
          <h2 className="self-start font-bold text-2xl font-Poppins">
            {card.title}
          </h2>
          <div className="flex gap-2">
            <span>
              <FaArrowLeft
                size={33}
                className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
                onClick={scrollTopPicksRight}
              />
            </span>
            <span>
              <FaArrowRight
                size={33}
                className="bg-gray-200 rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
                onClick={scrollTopPicksLeft}
              />
            </span>
          </div>
        </div>

        <div
          className=" flex flex-nowrap gap-5 overflow-x-auto scroll-smooth no-scrollbar "
          ref={topPicksScrollBar}
        >
          {carousel.map((card) => (
            <div
              className="flex-shrink-0  flex-grow-0 basis-auto"
              key={carousel.bannerId}
            >
              <img
                src={FOOD_IMAGE + card.creativeId}
                alt=""
                className="w-72 h-72"
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default TopPicksPage;
