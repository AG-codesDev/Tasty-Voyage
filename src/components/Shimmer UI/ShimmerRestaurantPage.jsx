const ShimmmerRestaurantPage = () => {
  const categories = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="ShimmerUI gap-8 mt-32 lg:w-[60%] w-full mx-auto flex flex-col">
      <div className="restaurant-name w-1/3 lg:hidden bg-slate-300 animate-pulse h-8 animate-"></div>
      <div className="w-full flex flex-col gap-8 border-[15px] rounded-3xl p-5 border-gray-300 animate-pulse">
        <div className="restaurant-detail-card flex-col gap-8 flex lg:flex-row">
          <div className="img bg-slate-300 animate-pulse lg:w-48 h-48 w-full rounded-xl"></div>
          <div className="other-details flex gap-3 justify-around flex-col">
            <div className="bg-slate-300 animate-pulse h-6 w-56 lg:w-72"></div>
            <div className="bg-slate-300 animate-pulse h-6 w-60"></div>
            <div className="bg-slate-300 animate-pulse h-6 w-72"></div>
            <div className="bg-slate-300 animate-pulse h-6 w-56"></div>
          </div>
        </div>
      </div>
      <div className="dealsForYou hidden lg:flex gap-4 flex-col">
        <div className="heading bg-slate-300 animate-pulse w-60 h-8"></div>
        <div className="cards justify-between flex">
          <div className="singleCard bg-slate-300 animate-pulse w-72 rounded-lg h-20"></div>
          <div className="singleCard bg-slate-300 animate-pulse w-72 rounded-lg h-20"></div>
          <div className="singleCard bg-slate-300 animate-pulse w-72 rounded-lg h-20"></div>
        </div>
      </div>

      <div className="restaurantCategories w-96 mx-auto lg:w-full flex flex-col gap-5">
        {categories.map((number) => (
          <div
            className="singleCategory bg-slate-300 animate-pulse w-full h-16 rounded-sm"
            key={number}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default ShimmmerRestaurantPage;
