import React from "react";

const Shimmer3 = () => {
  const singleCards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1920, 21, 22,
    23, 24, 25, 26, 27, 28, 29,
  ];
  return (
    <div className="ShimmerUI mt-28 px-10 mx-auto gap-6 flex flex-wrap flex-col">
      <div className="restaurantHeader ml-10 border-8 w-[30rem] rounded-xl flex flex-col gap-4 p-6">
        <div className="title bg-slate-300 animate-pulse w-40 h-6"></div>
        <div className="title bg-slate-300 animate-pulse w-72 h-6"></div>
      </div>
      <div className="exploreContainer">
        <div className="exploreHeader ml-10 w-80 h-7 bg-slate-300 animate-pulse"></div>
        <div className="cardContainers justify-evenly flex flex-wrap gap-">
          {singleCards.map((number) => (
            <div
              className="singleCards p-2 my-4 flex flex-col gap-2 w-80"
              key={number}
            >
              <div className="img w-full bg-slate-300 animate-pulse h-60"></div>
              <div className="heading1 bg-slate-300 animate-pulse h-4 w-60"></div>
              <div className="heading1 bg-slate-300 animate-pulse h-4 w-40"></div>
              <div className="heading1 bg-slate-300 animate-pulse h-4 w-72"></div>
              <div className="heading1 bg-slate-300 animate-pulse h-4 w-56"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer3;
