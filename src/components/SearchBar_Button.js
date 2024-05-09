import React from "react";
import { useState } from "react";

const SearchBar_Button = ({ resList, setFilteredRestaurant }) => {
  // console.log(resList);
  const [fastDeliveryTab, setFastDeliveryTab] = useState(false);
  const [ratingTab, setRatingTab] = useState(false);
  const [aboveRs300Tab, setaboveRs300Tab] = useState(false);
  const [lessThan300Tab, setLessThan300Tab] = useState(false);
  const [nearMeTab, setNearMeTab] = useState(false);

  const handleFastDelivery = () => {
    setFastDeliveryTab(!fastDeliveryTab);
    setRatingTab(false);
    setLessThan300Tab(false);
    setaboveRs300Tab(false);
    setNearMeTab(false);

    const filterRestaurants = resList.filter(
      (res) => res.info.sla.deliveryTime < 30
    );
    fastDeliveryTab
      ? setFilteredRestaurant(resList)
      : setFilteredRestaurant(filterRestaurants);
  };

  const handleRatingTab = () => {
    setRatingTab(!ratingTab);
    setFastDeliveryTab(false);
    setLessThan300Tab(false);
    setaboveRs300Tab(false);
    setNearMeTab(false);

    const filterRestaurants = resList.filter((res) => res.info.avgRating > 4.0);
    setFilteredRestaurant(filterRestaurants);

    setFilteredRestaurant(resList);

    ratingTab
      ? setFilteredRestaurant(resList)
      : setFilteredRestaurant(filterRestaurants);
  };
  const handleAboveRs300 = () => {
    setaboveRs300Tab(!aboveRs300Tab);
    setRatingTab(false);
    setFastDeliveryTab(false);
    setLessThan300Tab(false);
    setNearMeTab(false);

    const filterRestaurants = resList.filter(
      (res) => res.info.costForTwo.match(/\d+/g) > 300
    );
    setFilteredRestaurant(filterRestaurants);

    setFilteredRestaurant(resList);

    aboveRs300Tab
      ? setFilteredRestaurant(resList)
      : setFilteredRestaurant(filterRestaurants);
  };

  const handleLessThan300 = () => {
    setLessThan300Tab(!lessThan300Tab);
    setaboveRs300Tab(false);
    setRatingTab(false);
    setFastDeliveryTab(false);
    setNearMeTab(false);

    const filterRestaurants = resList.filter(
      (res) => res.info.costForTwo.match(/\d+/g) < 300
    );
    setFilteredRestaurant(filterRestaurants);

    setFilteredRestaurant(resList);

    lessThan300Tab
      ? setFilteredRestaurant(resList)
      : setFilteredRestaurant(filterRestaurants);
  };

  const handleNearMe = () => {
    setNearMeTab(!nearMeTab);
    setLessThan300Tab(false);
    setaboveRs300Tab(false);
    setRatingTab(false);
    setFastDeliveryTab(false);

    const filterRestaurants = resList.filter(
      (res) => res.info.sla.lastMileTravel < 3
    );
    setFilteredRestaurant(filterRestaurants);

    setFilteredRestaurant(resList);

    nearMeTab
      ? setFilteredRestaurant(resList)
      : setFilteredRestaurant(filterRestaurants);
  };
  return (
    <div className="search-container  w-full flex ">
      <input
        type="text"
        onChange={(e) => {
          const filterRestaurants = resList.filter((res) =>
            res.info.cuisines
              .toString()
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          );
          setFilteredRestaurant(filterRestaurants);
        }}
        className="border-2  border-gray-500 w-2/3 px-2 py-1 text-gray-600 focus:outline-none focus:border-2 focus:border-gray-300 rounded-md text-center text-lg m-4"
        placeholder="⌕ Search for available Foods"
      />
      <div className="buttons flex items-center justify-around w-full">
        <button
          className={`border-2 border-gray-300 rounded-2xl h-fit p-2 ${
            fastDeliveryTab ? "border-orange-400" : ""
          } `}
          onClick={handleFastDelivery}
        >
          Fast Delivery
        </button>
        <button
          className={`border-2 border-gray-300 rounded-2xl h-fit p-2 ${
            ratingTab ? "border-orange-400" : ""
          } `}
          onClick={handleRatingTab}
        >
          Rating 4.0+
        </button>
        <button
          className={`border-2 border-gray-300 rounded-2xl h-fit p-2 ${
            nearMeTab ? "border-orange-400" : ""
          } `}
          onClick={handleNearMe}
        >
          Near Me
        </button>
        <button
          className={`border-2 border-gray-300 rounded-2xl h-fit p-2 ${
            aboveRs300Tab ? "border-orange-400" : ""
          } `}
          onClick={handleAboveRs300}
        >
          Above Rs 300
        </button>
        <button
          className={`border-2 border-gray-300 rounded-2xl h-fit p-2 ${
            lessThan300Tab ? "border-orange-400" : ""
          } `}
          onClick={handleLessThan300}
        >
          Less than 300
        </button>
      </div>
    </div>
  );
};

export default SearchBar_Button;
