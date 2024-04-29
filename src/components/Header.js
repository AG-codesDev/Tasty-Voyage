import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, Setloginbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserContext);
  // console.log(userStatus);

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called only once on initial render
  // if dependency array is [loginbtn] => useEffect will be called each time whenever loginbtn is updated
  useEffect(() => {
    // console.log("UseEffect called");
  }, [loginbtn]);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header z-10 w-full flex justify-between shadow-lg px-10 items-center">
      <div className="logocontainer w-fit flex items-center">
        <img
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="FoodiesFinder"
          className="rounded-full h-20"
        />
        <div className="flex flex-col">
          <span className="font-Pacifico text-2xl font-bold">Tasty Voyage</span>
          <span className="text-xs text-right">by Apurva</span>
        </div>
      </div>
      <div className="nav-items flex">
        <ul className="flex gap-10 text-lg">
          <li className=" text-xl hover:text-orange-500 transition-all font-Russo ">
            <Link to="/">Home</Link>
          </li>
          <li className=" text-xl hover:text-orange-500 transition-all font-Russo ">
            <Link to="/about">About</Link>
          </li>

          <li className=" text-lg hover:text-orange-500 transition-all font-Russo  ">
            <Link to="/cart">🛒Cart - {cartItems.length} items</Link>
          </li>
          <li className=" text-lg hover:text-orange-500 transition-all font-Russo  ">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
