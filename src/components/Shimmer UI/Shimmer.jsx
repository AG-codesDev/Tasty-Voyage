const Shimmer = () => {
  const singleFoodItem = [1, 2, 3, 4, 5, 6, 7];
  const singleCards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1920, 21, 22,
    23, 24, 25, 26, 27, 28, 29,
  ];
  return (
    <div className="ShimmerUI mt-24 flex flex-col gap-12 scroll-smooth w-4/5 mx-auto">
      <div className="whatsOnMind-container flex justify-around flex-col h-56 w-full">
        <div className="whatsOnMindHeader w-72 rounded-md animate-bounce h-8 bg-slate-300"></div>

        <div className="foodPictureContainers justify-between flex w-full">
          {singleFoodItem.map((number) => (
            <div
              className="singleFoodItem h-36 w-36 rounded-full bg-slate-300 animate-pulse"
              key={number}
            ></div>
          ))}
        </div>
      </div>

      <div className="topRestaurantsChainContainer justify-between  flex flex-col gap-6 w-full">
        <div className="topRestaurantsChainHeader rounded-md w-1/3 animate-bounce h-8 bg-slate-300"></div>
        <div className="restaurantCards flex justify-between  w-full flex-wrap">
          {singleCards.map((number) => (
            <div
              className="singleCards my-4 flex flex-col gap-2 w-72"
              key={number}
            >
              <div className="img w-full bg-slate-300 animate-pulse h-48"></div>
              <div className="heading1 bg-slate-300 animate-pulse h-4 w-56"></div>
              <div className="heading1 bg-slate-300 animate-pulse h-4 w-48"></div>
              <div className="heading1 bg-slate-300 animate-pulse h-4 w-36"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
