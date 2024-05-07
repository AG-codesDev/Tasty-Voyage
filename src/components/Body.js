import RestaurantCards from "./RestaurantCard";
import { useState, useEffect, useContext, useRef } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import WhatsOnMind from "./WhatsOnMind";
import TopRestaurantChains from "./TopRestaurantChains";

const Body = () => {
  const [resList, setResList] = useState([]);

  const [foodItemsHeader, setFoodItemsHeader] = useState([]);
  const [foodItemImages, setFoodItemImages] = useState([]);
  const [topRestaurantHeader, setTopRestaurantHeader] = useState("");
  const [topRestaurantChains, setTopRestaurantChains] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();

    console.log(json);

    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFoodItemsHeader(json?.data?.cards[0]?.card?.card?.header);
    setFoodItemImages(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setTopRestaurantHeader(json?.data?.cards[1]?.card?.card?.header);
    setTopRestaurantChains(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log(topRestaurantChains);

  if (filteredRestaurant?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body mt-24 h-fit scroll-smooth w-[70%]  mx-auto ">
      <WhatsOnMind
        foodItemsHeader={foodItemsHeader}
        foodItemImages={foodItemImages}
      />
      <TopRestaurantChains
        topRestaurantHeader={topRestaurantHeader}
        topRestaurantChains={topRestaurantChains}
      />

      {/* <div className="SearchBox-btns mt-20  flex-col gap-20 items-center justify-center">
        <div className="search-container w-2/3 mx-auto justify-center flex items-center    ">
          {
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="border-2  border-gray-300 w-2/3 px-2 py-1 text-gray-600 focus:outline-none focus:border-2 focus:border-gray-300 rounded-md text-center text-lg m-4"
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

        <div className="btns mx-auto my-5  flex w-4/5   justify-between px-5 ">
          <div className="clearfltrbtn flex">
            <button
              className="bg-gray-900 text-white font-semibold  p-2 rounded-md text-center hover:bg-gray-800 active:bg-red-600 active:text-black transition-all "
              onClick={() => {
                const filteredResList = resList.filter(
                  (res) => res.info.avgRating <= 5
                );
                setFilteredRestaurant(filteredResList);
                setTopRatedActive(false);
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
                const filteredResList = resList.filter(
                  (res) => res.info.avgRating >= 4
                );
                setFilteredRestaurant(filteredResList);
                toggleTopRated();
              }}
              className={
                topRatedActive
                  ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
                  : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
              }
            >
              Top Rated ★
            </button>

            <button
              onClick={() => {
                const fasterDeliveryRestaurants = resList.filter(
                  (res) => res.info.sla.deliveryTime <= 30
                );
                setFilteredRestaurant(fasterDeliveryRestaurants);
                toggleFasterDelivery();
              }}
              className={
                fasterDeliveryActive
                  ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
                  : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
              }
            >
              30 min delivery ⏱︎
            </button>

            <button
              onClick={() => {
                const pizzaFood = resList.filter((res) =>
                  res.info.cuisines.toString().includes("Pizzas")
                );
                setFilteredRestaurant(pizzaFood);
                togglePizza();
              }}
              className={
                pizzaActive
                  ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
                  : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
              }
            >
              Pizzas🍕
            </button>

            <button
              onClick={() => {
                const dessertFood = resList.filter((res) =>
                  res.info.cuisines.toString().includes("Desserts")
                );
                setFilteredRestaurant(dessertFood);
                toggleDesserts();
              }}
              className={
                dessertsActive
                  ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
                  : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
              }
            >
              Desserts 😋
            </button>

            <button
              onClick={() => {
                const indianFood = resList.filter((res) =>
                  res.info.cuisines.toString().includes("Indian")
                );
                setFilteredRestaurant(indianFood);
                toggleIndian();
              }}
              className={
                IndianActive
                  ? "bg-slate-600 text-white font-semibold  p-2 rounded-md text-center"
                  : "text-black font-bold  p-2 rounded-md text-center bg-slate-200 transition-all hover:bg-slate-300"
              }
            >
              Indian 🍚
            </button>

            <button
              onClick={() => {
                const chineseFood = resList.filter((res) =>
                  res.info.cuisines.toString().includes("Chinese")
                );
                setFilteredRestaurant(chineseFood);
                toggleChinese();
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
        </div>
      </div>

      <div className="res-container flex flex-wrap relative justify-center gap-6 px-4  ">
        {filteredRestaurant.map((restaurant, i) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Body;
