import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SELECTED_FOOD_API } from "../utils/Constants";
import RestaurantCard from "./RestaurantCard";

const SelectedDishPage = () => {
  const [searchParams] = useSearchParams();
  const collection_id = searchParams.get("collectionID");
  const [header, setHeader] = useState([]);
  const [totalCards, setTotalCards] = useState([]);

  const fetchSelectedFoodRestaurants = async () => {
    const data = await fetch(SELECTED_FOOD_API + collection_id);
    const json = await data.json();
    // console.log(json);

    setHeader(json?.data?.cards[0]?.card?.card);
    // const filteredCards = json?.data?.cards
    setTotalCards(json?.data?.cards);
    // console.log(cards);
  };
  // console.log(totalCards);
  // setRelevantCards(
  const filteredCards = totalCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  // console.log(filteredCards);
  // );
  // setRelevantCards(filteredCards);
  // console.log(filteredCards);
  useEffect(() => {
    fetchSelectedFoodRestaurants();
  }, []);

  return (
    <div className="mt-24 px-10 mx-auto flex flex-wrap flex-col">
      <div className="my-3 w-fit p-3 bg-gradient-to-t  from-gray-300 shadow-lg rounded-xl ">
        <div className=" bg-white rounded-xl p-3">
          <h1 className="font-Poppins text-3xl font-semibold text-gray-900">
            🍚 {header.title}
          </h1>
          <h3 className="font-poppins text-xl text-slate-700">
            {header.description}
          </h3>
        </div>
      </div>
      <h2 className="text-3xl font-Poppins font-medium mt-5">
        Restaurants to Explore{" "}
      </h2>
      {/* <div className="outline"> */}
      <div className="flex gap-4 flex-wrap">
        {filteredCards.map((resCard) => (
          <RestaurantCard
            resData={resCard?.card?.card}
            key={resCard?.card?.info?.id}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default SelectedDishPage;
