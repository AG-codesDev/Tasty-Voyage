import { useEffect, useState,useContext } from "react";
import { LOGO } from "../utils/Constants";
import { Link } from "react-router-dom";
// import useOnlineStatus from "./src/.utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginbtn, Setloginbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log(userStatus);

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called only once on initial render
  // if dependency array is [loginbtn] => useEffect will be called each time whenever loginbtn is updated
  useEffect(() => {
    // console.log("UseEffect called");
  }, [loginbtn]);

  return (
    <div className="header flex bg-slate-50 shadow-md justify-between m-2 mb-5 border-2 border-gray-200 px-10  items-center">
      <div className="logocontainer w-24">
        <img src={LOGO} alt="" className="logo rounded-full" />
      </div>
      <div className="nav-items flex">
        <ul className="flex gap-10 text-lg">
          <li><Link to="/">Home</Link></li>
          <li className="hover:text-green-600 transition-colors">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
         
          {/* <li className="hover:text-red-600 transition-colors">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className=" hover:text-red-600 ">
            <Link to="/cart">🛒Cart</Link>
          </li>

          <li className="hover:text-red-600 transition-colors">
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
            {" "+ loggedInUser}

          </li>

          {/* <li className="hover:bg-black hover:text-white transition-colors">Cart</li> */}

         
       
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
