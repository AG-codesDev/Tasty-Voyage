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
  const [displaySearchBox, setDisplaySearchBox] = useState(false);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);
  // console.log(loggedInUser);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(resList);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();

    // console.log(
    //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (filteredRestaurant?.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false)
    return (
      <h1>
        You are offline!! Please check your internet connection and try again!
      </h1>
    );

  const showSearchBar = () => {
    setDisplaySearchBox(true);
  };

  const hideSearchBar = () => {
    setDisplaySearchBox(false);
  };

  return (
    <div className="body scroll-smooth">
      <div className="search-top-btn flex gap-20 h-14 items-center justify-center">
        <div className="filter-btn">
          <button
            onClick={() => {
              const filteredResList = filteredRestaurant.filter(
                (res) => res.info.avgRating >= 4
              );
              // console.log(filteredResList);
              setFilteredRestaurant(filteredResList);
            }}
            className="bg-black text-white px-2 py-1 rounded-md text-center hover:bg-blue-500 transition-all "
          >
            Top Rated ⭐
          </button>
        </div>

        <div
          className="search-container transition-all"
          onMouseOver={showSearchBar}
          onMouseOut={hideSearchBar}
        >
          {displaySearchBox && (
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="border-2 rounded-md border-gray-500 px-2 py-1 m-4"
            />
          )}
          <button
            onClick={() => {
              // console.log(searchText);
              const filterRestaurants = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterRestaurants);
            }}
            className=" text-white bg-black px-2 py-1 rounded-md text-center hover:bg-blue-500 transition-all"
          >
            <span className="flex gap-2 items-center">
              <span>{" Search "}</span>
              <span className="text-lg">{" ⌕ "}</span>
            </span>
          </button>
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

      <div className="res-container flex flex-wrap  justify-center gap-6 px-4  ">
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
