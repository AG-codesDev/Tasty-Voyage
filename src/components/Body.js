import RestaurantCards from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer2 from "../components/Shimmer2";
import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [topRatedActive, setTopRatedActive] = useState(false);
  const [fasterDeliveryActive, setFasterDeliveryActive] = useState(false);
  const [pizzaActive, setPizzaActive] = useState(false);
  const [dessertsActive, setDessertsActive] = useState(false);
  const [IndianActive, setIndianActive] = useState(false);
  const [chineseActive, setChineseActive] = useState(false);

  const toggleTopRated = () => {
    setTopRatedActive(true);
    setFasterDeliveryActive(false);
    setPizzaActive(false);
    setDessertsActive(false);
    setIndianActive(false);
    setChineseActive(false);
  };

  const toggleFasterDelivery = () => {
    setFasterDeliveryActive(true);
    setTopRatedActive(false);
    setPizzaActive(false);
    setDessertsActive(false);
    setIndianActive(false);
    setChineseActive(false);
  };

  const togglePizza = () => {
    setPizzaActive(true);
    setTopRatedActive(false);
    setDessertsActive(false);
    setIndianActive(false);
    setChineseActive(false);
    setFasterDeliveryActive(false);
  };

  const toggleDesserts = () => {
    setDessertsActive(true);
    setPizzaActive(false);
    setTopRatedActive(false);
    setIndianActive(false);
    setChineseActive(false);
    setFasterDeliveryActive(false);
  };

  const toggleIndian = () => {
    setIndianActive(true);
    setPizzaActive(false);
    setTopRatedActive(false);
    setChineseActive(false);
    setFasterDeliveryActive(false);
    setDessertsActive(false);
  };
  const toggleChinese = () => {
    setChineseActive(true);
    setDessertsActive(false);
    setPizzaActive(false);
    setTopRatedActive(false);
    setIndianActive(false);
    setFasterDeliveryActive(false);
  };

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();

  // const { loggedInUser, setUserName } = useContext(UserContext);
  // console.log(loggedInUser);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(resList);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();

    // console.log(json);

    // json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (filteredRestaurant?.length === 0) {
    return <Shimmer />;
  }
  // console.log(filteredRestaurant)

  if (onlineStatus === false)
    return (
      <h1>
        You are offline!! Please check your internet connection and try again!
      </h1>
    );

  return (
    <div className="body mt-6 h-fit scroll-smooth ">
      <div className="SearchBox-btns  flex-col gap-20 items-center justify-center">
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

        <div className="btns mx-auto my-5  flex w-4/5   justify-between px-5 ">
          {/* clear filter btn */}
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
                // console.log("Top Rated clicked");
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

            {/* faster delivery btn*/}
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

            {/* Pizzas btn */}
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

            {/* Desserts btn */}
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

            {/* Indian btn */}
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

            {/* Chinese btn */}
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
      </div>
    </div>
  );
};

export default Body;
