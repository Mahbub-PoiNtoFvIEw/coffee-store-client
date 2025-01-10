import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaList } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SideNav = () => {
  const [showNav, setShowNav] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut();
  };
  return (
    <div className="relative">
      <FaList
        onClick={() => setShowNav(!showNav)}
        className="cursor-pointer text-4xl text-slate-500 mt-2 ml-2 p-1"
      ></FaList>
      <div
        className={`duration-1000 absolute top-6 ${
          !showNav ? "left-2 -top-2" : "-left-40 -top-2"
        }`}
      >
        <h2 className="pt-2 text-2xl font-bold">Admin panel</h2>
        <ul className="md:pl-6 pl-1 space-y-2 mt-2">
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
              to={`/users`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline font-bold"
                  : "text-blue-500 hover:underline"
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/addCoffee`}
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
              to={`/addJuice`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline font-bold"
                  : "text-blue-500 hover:underline"
              }
            >
              Add Juice
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/updateProfile`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline font-bold"
                  : "text-blue-500 hover:underline"
              }
            >
              Update Profile
            </NavLink>
          </li>
          <li>
              <button
                onClick={handleSignOut}
                className="text-blue-500 hover:underline"
              >
                Sign Out
              </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
