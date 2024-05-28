import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdHome } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { TbHelpOctagon } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { toggleSideBar } from "../../utils/sideBarSlice";
import { useEffect, useRef } from "react";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
  const cityDetails = useSelector((store) => store.sidebar.cityDetails);
  // console.log(cityDetails);

  const dispatch = useDispatch();
  const locationRef = useRef(null);

  const handleLocationClick = (e) => {
    dispatch(toggleSideBar(true));
  };

  const handleClickOutside = (e) => {
    if (locationRef.current && !locationRef.current.contains(e.target)) {
      dispatch(toggleSideBar(false));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="header bg-white fixed w-screen top-0 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between shadow-lg lg:px-10 items-center z-10 py-2">
      <div className="logo-location px-1  w-full lg:w-fit flex justify-between items-center ">
        <Link to={"/"}>
          <div className="flex flex-row items-center cursor-pointer">
            <img
              src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
              alt="FoodiesFinder"
              className="rounded-full lg:h-16 h-14"
            />
            <span className="font-Pacifico w-44 lg:w-fit text-xl font-bold">
              Tasty Voyage
            </span>
          </div>
        </Link>
        <div className="text-lg mt-1 flex lg:ml-5 cursor-pointer">
          <span>
            <MdLocationOn className="mt-1 mr-1 text-orange-500 text-xl" />
          </span>
          <div
            className="flex items-center font-semibold  gap-2"
            onClick={handleLocationClick}
            ref={locationRef}
          >
            <span className="underline-offset text-sm font-bold lg:text-lg font-Poppins text-gray-800 hover:text-orange-500 transition-all ">
              {cityDetails.length === 0 ? "Patna" : cityDetails.cityName}
            </span>
            <span className="text-gray-600 text-sm">
              {cityDetails.length === 0 ? "Bihar, India" : cityDetails.state}
            </span>
            <span>
              {" "}
              {isMenuOpen ? (
                <FaAngleUp className="text-orange-500" />
              ) : (
                <FaAngleDown className="text-orange-500" />
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="nav-items flex">
        <ul className="flex  gap-5 lg:gap-10">
          <Link to={"/"}>
            <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-500 font-medium items-center gap-1 flex">
              <span>
                <MdHome className="" />
              </span>{" "}
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-500 font-medium items-center gap-1 flex">
              <span>
                <IoMdInformationCircle />
              </span>
              <span>About</span>
            </li>
          </Link>
          <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-500 font-medium items-center gap-1 flex">
            <span>
              <BiSolidOffer />
            </span>
            <span>Offers</span>
          </li>
          <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-500 font-medium items-center gap-1 flex">
            <span>
              <TbHelpOctagon />
            </span>
            <span>Help</span>
          </li>

          <Link to={"/cart"}>
            <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-500 font-medium items-center gap-1 flex">
              <span>
                <FaShoppingCart />
              </span>
              <span>
                Cart {cartItems.length > 0 && `[${cartItems.length}]`}
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
