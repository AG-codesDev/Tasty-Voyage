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
import MainContainer from "./components/MainContainer";

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
// const Grocery = lazy(() => import("./components/Grocery"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />

      {/* <Shimmer /> */}
    </div>
  );
}

export default App;
