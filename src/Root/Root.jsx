import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import PrivateRoutes from "../Routes/PrivateRoutes";

const Root = () => {
  return (
    <div >
      <div>
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
