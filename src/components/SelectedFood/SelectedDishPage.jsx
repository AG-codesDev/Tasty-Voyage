import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import RestaurantCard from "./RestaurantCard";
import RestaurantCard from "../Body components/RestaurantCard";
import { useSelector } from "react-redux";
// import Shimmer3 from "../Shimmer UI/ShimmerSelectedDishPage";
import ShimmerSelectedDishPage from "../Shimmer UI/ShimmerSelectedDishPage";

const SelectedDishPage = () => {
  const { latitude, longitude } = useSelector(
    (store) => store.sidebar.latitudeLongitude
  );
  // console.log(latitude);
  const [searchParams] = useSearchParams();
  const collection_id = searchParams.get("collectionID");
  const [header, setHeader] = useState([]);
  const [totalCards, setTotalCards] = useState([]);

  const fetchSelectedFoodRestaurants = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${
        latitude ? latitude : "25.5941"
      }&lng=${
        longitude ? longitude : "85.1376"
      }&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null&collection=` +
        collection_id
    );
    const json = await data.json();
    // console.log(json);

    setHeader(json?.data?.cards[0]?.card?.card);
    // const filteredCards = json?.data?.cards
    setTotalCards(json?.data?.cards);
    // console.log(cards);
  };

  const filteredCards = totalCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  useEffect(() => {
    fetchSelectedFoodRestaurants();
  }, []);

  if (totalCards.length === 0) {
    return <ShimmerSelectedDishPage />;
  }

  return (
    <div className="mt-32 px-10 mx-auto flex flex-wrap flex-col">
      <div className="my-3 w-fit p-3 bg-gradient-to-t mx-auto lg:ml-6 from-gray-300 shadow-lg rounded-xl ">
        <div className=" bg-white rounded-xl p-3">
          <h1 className="font-Poppins text-3xl font-semibold text-gray-900">
            🍚 {header.title}
          </h1>
          <h3 className="font-poppins text-xl text-slate-700">
            {header.description}
          </h3>
        </div>
      </div>
      <h2 className="text-3xl mx-auto lg:ml-8 font-Poppins font-semibold mt-7">
        Restaurants to Explore{" "}
      </h2>
      {/* <div className="outline"> */}
      <div className="flex justify-around gap-4 flex-wrap">
        {filteredCards.map((resCard) => (
          <RestaurantCard
            resData={resCard?.card?.card}
            key={resCard?.card?.card?.info?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedDishPage;
