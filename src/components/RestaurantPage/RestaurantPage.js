import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory";
import Shimmer2 from "../Shimmer2";
import { useState } from "react";
import RestaurantDetails from "./RestaurantDetails";
import DealsForYouPage from "./DealsForYouPage";
import TopPicksPage from "./TopPicksPage";

const RestaurantPage = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
  if (resInfo === null) return <Shimmer2 />;

  // console.log(resInfo?.cards[2]?.card?.card?.info);

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const categories = cards.filter(
    (c) =>
      c.card?.card?.["@type"].includes(
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      ) ||
      c.card?.card?.["@type"].includes(
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
  );
  // console.log(categories);

  return (
    <div className="flex mt-20 w-[60%] mx-auto flex-col items-center ">
      <RestaurantDetails resInfo={resInfo} />
      <DealsForYouPage resInfo={resInfo} />
      <TopPicksPage resInfo={resInfo} />

      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
        />
      ))}
    </div>
  );
};

export default RestaurantPage;