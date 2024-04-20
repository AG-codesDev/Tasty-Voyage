import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainContainer;
