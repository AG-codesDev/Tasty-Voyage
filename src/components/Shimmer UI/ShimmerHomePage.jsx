const ShimmerHomePage = () => {
  const singleFoodItem = [1, 2, 3, 4, 5, 6, 7];
  const singleCards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1920, 21, 22,
    23, 24, 25, 26, 27, 28, 29,
  ];
  return (
    <div className="shimmerUI flex flex-col gap-12 w-full lg:w-4/5 mx-auto mt-32">
      <div className="whatsOnMindContainer gap-4 flex flex-col">
        <div className="header1 ml-2 animate-pulse bg-slate-300 w-[40%] lg:w-1/4 h-8" />
        <div className="foodItems justify-between flex">
          <div className="singleFoodItem bg-slate-300 h-24 w-24 lg:h-36 animate-pulse lg:w-36 rounded-full" />
          <div className="singleFoodItem bg-slate-300 h-24 w-24 lg:h-36 lg:w-36 animate-pulse rounded-full" />
          <div className="singleFoodItem bg-slate-300 h-24 w-24 lg:h-36 lg:w-36 animate-pulse rounded-full" />
          <div className="singleFoodItem bg-slate-300 h-24 w-24 lg:h-36 lg:w-36 animate-pulse rounded-full" />
          <div className="singleFoodItem hidden lg:block bg-slate-300 h-24 w-24 lg:h-36 lg:w-36 animate-pulse rounded-full" />
          <div className="singleFoodItem hidden lg:block bg-slate-300 h-24 w-24 lg:h-36 lg:w-36 animate-pulse rounded-full" />
          <div className="singleFoodItem hidden lg:block bg-slate-300 h-24 w-24 lg:h-36 lg:w-36 animate-pulse rounded-full" />
        </div>
      </div>

      <div className="topRestaurantChainsContainer w-full flex flex-col gap-6">
        <div className="header-2 ml-2 animate-pulse bg-slate-300 w-1/2 lg:w-1/3 h-8" />
        <div className="restaurantCards flex justify-around lg:justify-between ">
          <div className="singleCard flex flex-col">
            <div className="img lg:w-72 w-48 h-44 rounded-xl bg-slate-300 animate-pulse" />
            <div className="ml-1 details gap-2 flex flex-col mt-2">
              <div className="h-4 w-[70%] bg-slate-300 animate-pulse"></div>
              <div className="h-4 w-1/2 bg-slate-300 animate-pulse"></div>
            </div>
          </div>
          <div className="singleCard flex flex-col">
            <div className="img lg:w-72 w-48 h-44 rounded-xl bg-slate-300 animate-pulse" />
            <div className="ml-1 details gap-2 flex flex-col mt-2">
              <div className="h-4 w-[70%] bg-slate-300 animate-pulse"></div>
              <div className="h-4 w-1/2 bg-slate-300 animate-pulse"></div>
            </div>
          </div>
          <div className="singleCard hidden lg:flex flex-col">
            <div className="img w-72 h-44 rounded-xl bg-slate-300 animate-pulse" />
            <div className="ml-1 details gap-2 flex flex-col mt-2">
              <div className="h-4 w-[70%] bg-slate-300 animate-pulse"></div>
              <div className="h-4 w-1/2 bg-slate-300 animate-pulse"></div>
            </div>
          </div>
          <div className="singleCard hidden lg:flex flex-col">
            <div className="img w-72 h-44 rounded-xl bg-slate-300 animate-pulse" />
            <div className="ml-1 details gap-2 flex flex-col mt-2">
              <div className="h-4 w-[70%] bg-slate-300 animate-pulse"></div>
              <div className="h-4 w-1/2 bg-slate-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="onlineFoodDeliveryRestaurants flex flex-col gap-6">
        <div className="header3 ml-2 animate-pulse bg-slate-300 w-4/5 lg:w-[70%] h-8" />
        <div className="restaurant-cards flex flex-wrap justify-around">
          {singleCards.map((number) => (
            <div className="singleCard my-4 flex flex-col" key={number}>
              <div className="img lg:w-72 w-96 h-56 rounded-sm bg-slate-300 animate-pulse" />
              <div className="ml-1 details gap-2 flex flex-col mt-2">
                <div className="h-4 w-4/5 bg-slate-300 animate-pulse"></div>
                <div className="h-4 w-1/3 bg-slate-300 animate-pulse"></div>
                <div className="h-4 w-[60%] bg-slate-300 animate-pulse"></div>
                <div className="h-4 w-[50%] bg-slate-300 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerHomePage;
