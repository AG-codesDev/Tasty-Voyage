import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineMyLocation } from "react-icons/md";
import { DEFAULT_RESTAURANT_LIST } from "../../utils/Constants";
import {
  addResList,
  setCityDetails,
  setlatitudeLongitude,
} from "../../utils/sideBarSlice";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
  // console.log(collection_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchResList = async () => {
    const data = await fetch(DEFAULT_RESTAURANT_LIST);
    const json = await data.json();

    dispatch(addResList(json));
  };

  useEffect(() => {
    fetchResList();
  }, []);
  const cities = [
    {
      name: "Mumbai",
      state: "Maharashtra, India",
      latitude: 19.076,
      longitude: 72.8777,
    },

    {
      name: "Banglore",
      state: "Karnataka, India",
      latitude: 12.9716,
      longitude: 77.5946,
    },

    {
      name: "Delhi",
      state: "Delhi, India",
      latitude: 28.6139,
      longitude: 77.2088,
    },
    {
      name: "Pune",
      state: "Maharashtra, India",
      latitude: 18.5204,
      longitude: 73.8567,
    },
    {
      name: "Hyderabad",
      state: "Telangana, India",
      latitude: 17.4065,
      longitude: 78.4772,
    },
    // {
    //   name: "Patna",
    //   state: "Bihar, India",
    //   latitude: 25.5941,
    //   longitude: 85.1376,
    // },
  ];
  const handleClick = async (cityName, latitude, longitude, state) => {
    const cityResList = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await cityResList.json();
    dispatch(addResList(json));
    dispatch(setCityDetails({ cityName, state }));
    dispatch(setlatitudeLongitude({ latitude, longitude }));
    // console.log(latitude, longitude);

    navigate("/");
  };

  return (
    <div
      className={` w-1/3 bg-white shadow-2xl shadow-gray-800 flex justify-center h-screen rounded-sm  ease-in-out duration-300 fixed top-0 z-20 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-[32rem]"
      }`}
    >
      <div className="locations mt-10 flex flex-col gap-7 w-1/2  ">
        {cities.map((city) => (
          <div
            className="border-b-2 p-5 border-gray-300 gap-6 flex items-center cursor-pointer"
            key={city.name}
            onClick={() =>
              handleClick(city.name, city.latitude, city.longitude, city.state)
            }
          >
            <span className="location-icon">
              <MdOutlineMyLocation size={20} />
            </span>
            <div className="flex flex-col">
              <span className="font-Poppins text-lg hover:text-orange-500 transition-all">
                {city.name}
              </span>
              <span className="text-gray-600">{city.state}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
