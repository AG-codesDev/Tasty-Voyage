import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CgDetailsLess } from "react-icons/cg";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header z-10 bg-white fixed w-screen top-0 flex flex-col lg:flex-row justify-between shadow-lg px-10 items-center  ">
      <div className="logocontainer w-fit flex items-center">
        <img
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="FoodiesFinder"
          className="rounded-full lg:h-20 h-14"
        />
        <div className="flex flex-col">
          <span className="font-Pacifico text-2xl font-bold">Tasty Voyage</span>
          {/* <span className="text-xs text-right">by Apurva</span> */}
        </div>
      </div>
      <div className="nav-items flex">
        <ul className="flex gap-10">
          <Link to={"/"}>
            <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-700 font-medium items-center gap-1 flex">
              <span>
                <CiHome className="" />
              </span>{" "}
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-700 font-medium items-center gap-1 flex">
              <span>
                <CgDetailsLess />
              </span>
              <span>About</span>
            </li>
          </Link>

          <Link to={"/cart"}>
            <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-700 font-medium items-center gap-1 flex">
              <span>
                <CiShoppingCart />
              </span>
              <span>Cart</span>
            </li>
          </Link>
          <Link to={"/login"}>
            <li className="  hover:text-orange-500 transition-all font-Poppins text-gray-700 font-medium items-center gap-1 flex">
              <span>
                <CiUser />
              </span>
              <span>Login</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
