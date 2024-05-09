import RestaurantCards from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST } from "../utils/Constants";
import WhatsOnMind from "./WhatsOnMind";
import TopRestaurantChains from "./TopRestaurantChains";
import SearchBar_Button from "./SearchBar_Button";
import { MdNoFood } from "react-icons/md";

const Body = () => {
  const [resList, setResList] = useState([]);

  const [foodItemsHeader, setFoodItemsHeader] = useState([]);
  const [foodItemImages, setFoodItemImages] = useState([]);
  const [topRestaurantHeader, setTopRestaurantHeader] = useState("");
  const [topRestaurantChains, setTopRestaurantChains] = useState([]);
  const [
    onlineFoodDeliveryRestaurantHeader,
    setOnlineFoodDeliveryRestaurantHeader,
  ] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();

    // console.log(json);

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
    setOnlineFoodDeliveryRestaurantHeader(
      json?.data?.cards[2]?.card?.card?.title
    );
  };

  // console.log(filteredRestaurant);

  return (
    <>
      <div className="body mt-24 h-fit scroll-smooth w-[70%]  mx-auto ">
        <WhatsOnMind
          foodItemsHeader={foodItemsHeader}
          foodItemImages={foodItemImages}
        />
        <TopRestaurantChains
          topRestaurantHeader={topRestaurantHeader}
          topRestaurantChains={topRestaurantChains}
        />

        <div className="res-container flex mt-20 flex-col">
          <h1 className="font-bold text-2xl ml-3 font-Poppins">
            {onlineFoodDeliveryRestaurantHeader}
          </h1>
          <SearchBar_Button
            resList={resList}
            setFilteredRestaurant={setFilteredRestaurant}
            filteredRestaurant={filteredRestaurant}
          />
          <div className=" flex flex-wrap justify-evenly">
            {filteredRestaurant.map((restaurant, i) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCards resData={restaurant} />
              </Link>
            ))}
            {filteredRestaurant.length === 0 && (
              <div className="flex items-center gap-3 font-bold font-Poppins text-2xl text-red-600">
                <span>
                  <MdNoFood />
                </span>
                <span> Sorry the item is not available :(</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer mt-10 bg-gray-200 ">
        <div className="flex items-center gap-10 py-5 justify-center">
          <h1 className="text-xl font-bold font-Poppins text-gray-900">
            For better experience,download the app now
          </h1>
          <div className="imgBox flex">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt=""
              className="h-14 w-44"
            />
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt=""
              className="h-14 w-44"
            />
          </div>
        </div>
        <div className="myName bg-black text-white text-center py-4 font-serif">
          Made with 😋 by Apurva Gaurav
        </div>
      </div>
    </>
  );
};

export default Body;
