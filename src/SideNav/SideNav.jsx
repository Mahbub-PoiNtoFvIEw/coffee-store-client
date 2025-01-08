import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaList } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SideNav = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <div className="relative top-4">
      <FaList
        onClick={() => setShowNav(!showNav)}
        className="cursor-pointer text-4xl text-slate-500 mt-2 ml-2 p-1"
      ></FaList>
      <div
        className={`duration-1000 absolute top-6 ${
          !showNav ? "left-12 -top-2" : "-left-40 -top-2"
        }`}
      >
        <h2 className="pt-2 text-2xl font-bold">Admin panel</h2>
        <ul className="pl-6 space-y-2 mt-2">
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline font-bold"
                  : "text-blue-500 hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`addCoffee`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline font-bold"
                  : "text-blue-500 hover:underline"
              }
            >
              Add Coffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`updateCoffee`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline font-bold"
                  : "text-blue-500 hover:underline"
              }
            >
              Update Coffee
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
