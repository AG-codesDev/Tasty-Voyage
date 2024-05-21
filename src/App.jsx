import React from "react";
import Body from "./components/Body components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import Cart from "./components/Cart/CartPage";
import MainContainer from "./components/MainContainer";
import SelectedDishPage from "./components/SelectedDishPage";
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
        element: <RestaurantPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/selectedDish",
        element: <SelectedDishPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
