import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import User from "./components/User";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

/**
 * Header
 *  - logo
 *  - Nav items
 * Body
 *  -search
 *  -Restaurant container
 *      - Restaurant card
 *
 * Footer
 *  -Copyright
 *  -Links
 *  -...
 */
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  useEffect(() => {
    // making an api call and fetching some data and verifying the credentials
    const data = {
      name: "Apurva Gaurav",
    };
    setUserName(data.name);
  }, []);
  const [userName, setUserName] = useState("");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header className />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
