import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav/SideNav";

const Root = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNav></SideNav>
      </div>
      <div className="col-span-4">
        <div>
          <Header></Header>
        </div>
        <div >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
