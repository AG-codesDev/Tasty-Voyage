import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const MainContainer = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};

export default MainContainer;
