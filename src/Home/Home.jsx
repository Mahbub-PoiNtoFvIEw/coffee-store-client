import React, { useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
// import Coffee from "../components/Coffee";
import { Helmet } from "react-helmet";
import SideNav from "../SideNav/SideNav";
// import Juice from "../components/Juice";
import "../Home/Home.css"

const Home = () => {
  // const { loadedCoffee, loadedJuice } = useLoaderData();
  // const [coffees, setCoffees] = useState(loadedCoffee);
  // const [juices, setJuice] = useState(loadedJuice);
  return (
    <div className="md:grid grid-cols-5 md:max-w-7xl mx-auto">
      <Helmet>
        <title>DrinksStore</title>
      </Helmet>
      <div className="col-span-1">
        <SideNav></SideNav>
      </div>
      <div className="col-span-4">
        <nav className="mt-6 border-b-[.5px] space-x-4 border-[#1313134D] mx-2 flex relative">
          <NavLink
            to={`coffee`}
            className={({ isActive, isPending }) =>
              isActive ? "chrome-tab-active" : "chrome-tab-inactive"
            }
          >
            Coffee
          </NavLink>
          <NavLink
            to={`juice`}
            className={({ isActive }) =>
              isActive ? "chrome-tab-active" : "chrome-tab-inactive"
            }
          >
            Juice
          </NavLink>
        </nav>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
