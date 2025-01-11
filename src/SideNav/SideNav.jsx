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
      <div className=" flex gap-2 items-center">
        <FaList
          onClick={() => setShowNav(!showNav)}
          className="cursor-pointer text-4xl text-slate-500 mt-2 ml-2 p-1 md:block hidden"
        ></FaList>
        <h2 className="font-bold md:block hidden text-2xl">AdminPanel</h2>
      </div>
      <div
        className={`duration-1000 md:absolute top-6 ${
          !showNav ? "top-10" : "-left-48 top-10"
        }`}
      >
        <ul className="md:pl-3 space-y-1 md:flex md:flex-col font-bold mt-2 mb-2">
          <div className="flex md:flex-col md:gap-1 gap-2 justify-evenly">
            <li className="hover:bg-slate-100 rounded-lg px-8 py-1">
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
            <li className="hover:bg-slate-100 rounded-lg px-8 py-1">
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
            <li className="hover:bg-slate-100 rounded-lg px-8 py-1">
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
          </div>
          <div className="flex md:flex-col md:gap-1 gap-2 justify-evenly">
            <li className="hover:bg-slate-100 rounded-lg px-8 py-1">
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
            <li className="hover:bg-slate-100 rounded-lg px-8 py-1">
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
            <li className="hover:bg-slate-100 rounded-lg px-8 py-1">
              <button
                onClick={handleSignOut}
                className="text-blue-500 hover:underline"
              >
                Sign Out
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
