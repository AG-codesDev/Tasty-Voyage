<div className="SearchBox-btns flex-col gap-20 items-center justify-center">
<div className="search-container w-2/3 mx-auto justify-center flex items-center    ">
  {
    <input
      type="text"
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
      className="border-2  border-gray-300 w-2/3 px-2 py-1 text-gray-600 focus:outline-none focus:border-2 focus:border-gray-400 rounded-md text-center text-lg m-4"
      placeholder="⌕ Search for Restaurants"
    />
  }
  <button
    className="bg-orange-600 p-2 rounded-md text-white font-bold hover:bg-orange-500 transition-all"
    onClick={() => {
      const filterRestaurants = resList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filterRestaurants);
    }}
  >
    Search ⌕
  </button>
</div>

<div className="btns mx-auto my-5  flex w-4/5 justify-between px-5 ">
  {/* clear filter btn */}
  <div className="clearfltrbtn flex">
    <button
      className="bg-gray-900 text-white font-semibold  p-2 rounded-md text-center hover:bg-gray-800 active:bg-red-600 active:text-black transition-all "
      onClick={() => {
        const filteredResList = resList.filter(
          (res) => res.info.avgRating <= 5
        );
        setFilteredRestaurant(filteredResList);
        settopRatedActive(false);
        setFasterDeliveryActive(false);
        setPizzaActive(false);
        setDessertsActive(false);
        setIndianActive(false);
        setChineseActive(false);
      }}
    >
      Clear Filters ❌
    </button>
  </div>

  <div className="allotherbtns flex gap-10 ">
    <button
      onClick={() => {
        // console.log("Top Rated clicked");
        const filteredResList = resList.filter(
          (res) => res.info.avgRating >= 4
        );
        setFilteredRestaurant(filteredResList);
        toggleTopRated();
        setFasterDeliveryActive(false);
        setPizzaActive(false);
        setDessertsActive(false);
        setIndianActive(false);
        setChineseActive(false);
      }}
      className={
        topRatedActive
          ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
          : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
      }
    >
      Top Rated ★
    </button>

    {/* faster delivery btn*/}
    <button
      onClick={() => {
        const fasterDeliveryRestaurants = resList.filter(
          (res) => res.info.sla.deliveryTime <= 30
        );
        setFilteredRestaurant(fasterDeliveryRestaurants);
        toggleFasterDelivery();
        settopRatedActive(false);
        setPizzaActive(false);
        setDessertsActive(false);
        setIndianActive(false);
        setChineseActive(false);
      }}
      className={
        fasterDeliveryActive
          ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
          : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
      }
    >
      30 min delivery ⏱︎
    </button>

    {/* Pizzas btn */}
    <button
      onClick={() => {
        const pizzaFood = resList.filter((res) =>
          res.info.cuisines.toString().includes("Pizzas")
        );
        setFilteredRestaurant(pizzaFood);
        togglePizza();
        settopRatedActive(false);
        setFasterDeliveryActive(false);
        setDessertsActive(false);
        setIndianActive(false);
        setChineseActive(false);
      }}
      className={
        pizzaActive
          ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
          : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
      }
    >
      Pizzas🍕
    </button>

    {/* Desserts btn */}
    <button
      onClick={() => {
        const dessertFood = resList.filter((res) =>
          res.info.cuisines.toString().includes("Desserts")
        );
        setFilteredRestaurant(dessertFood);
        toggleDesserts();
        settopRatedActive(false);
        setFasterDeliveryActive(false);
        setPizzaActive(false);
        setIndianActive(false);
        setChineseActive(false);
      }}
      className={
        dessertsActive
          ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
          : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
      }
    >
      Desserts 😋
    </button>

    {/* Indian btn */}
    <button
      onClick={() => {
        const indianFood = resList.filter((res) =>
          res.info.cuisines.toString().includes("Indian")
        );
        setFilteredRestaurant(indianFood);
        toggleIndian();
        settopRatedActive(false);
        setFasterDeliveryActive(false);
        setPizzaActive(false);
        setDessertsActive(false);
        setChineseActive(false);
      }}
      className={
        IndianActive
          ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
          : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
      }
    >
      Indian 🍚
    </button>

    {/* Chinese btn */}
    <button
      onClick={() => {
        const chineseFood = resList.filter((res) =>
          res.info.cuisines.toString().includes("Chinese")
        );
        setFilteredRestaurant(chineseFood);
        toggleChinese();
        settopRatedActive(false);
        setFasterDeliveryActive(false);
        setPizzaActive(false);
        setDessertsActive(false);
        setIndianActive(false);
      }}
      className={
        chineseActive
          ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
          : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
      }
    >
      Chinese 🍜
    </button>
  </div>
  {/* top rated btn */}
</div>

{/* <div>
  <label>UserName: </label>
  <input
    type="text"
    className="border-2 border-black p-2"
    value={loggedInUser}
    onChange={(e) => setUserName(e.target.value)}
  />
</div> */}
</div>