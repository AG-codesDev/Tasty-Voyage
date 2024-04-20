import { useEffect, useState, useContext } from "react";
import { LOGO } from "../utils/Constants";
import { Link } from "react-router-dom";
// import useOnlineStatus from "./src/.utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
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
      <div className="logocontainer w-32 ">
        <img
          src="https://foodiesfinder.com/wp-content/uploads/2023/10/1-1-1.png"
          alt="FoodiesFinder"
          className="rounded-full h-20"
        />
      </div>
      <div className="nav-items flex">
        <ul className="flex gap-10 text-lg">
          <li className=" text-xl hover:text-orange-500 transition-all font-Russo ">
            <Link to="/">Home</Link>
          </li>
          <li className=" text-lg  font-Russo ">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>

          <li className=" text-lg hover:text-orange-500 transition-all font-Russo  ">
            <Link to="/cart">🛒Cart - {cartItems.length} items</Link>
          </li>

          {/* <li className=" text-lg font-medium font-sans ">
            <button
              className="login-btn"
              onClick={() => {
                loginbtn === "Login"
                  ? Setloginbtn("Logout")
                  : Setloginbtn("Login");
              }}
            >
              👤{loginbtn}:
            </button>
            {" " + loggedInUser}
          </li> */}
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
