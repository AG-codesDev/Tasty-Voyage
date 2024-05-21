import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdHome } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { TbHelpOctagon } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header z-10 bg-white fixed w-screen top-0 flex flex-col lg:flex-row justify-between shadow-lg px-10 items-center  py-2">
      <div className="logocontainer w-fit flex outline justify-center items-center">
        <img
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="FoodiesFinder"
          className="rounded-full lg:h-16 h-14"
        />
        <span className="font-Pacifico text-xl font-bold">Tasty Voyage</span>
        <div className="text-lg flex ml-3 ">
          <span>
            <MdLocationOn className="mt-1" />
          </span>
          <span>
            Patna <FaAngleDown />
          </span>
        </div>
      </div>
      <div className="nav-items flex">
        <ul className="flex gap-10">
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
