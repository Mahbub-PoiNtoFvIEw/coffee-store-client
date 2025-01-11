import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import SideNav from "../SideNav/SideNav";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(loadedUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="md:max-w-7xl mx-auto md:grid grid-cols-5">
      <Helmet>
        <title>DrinksStore | Users</title>
      </Helmet>
      <div>
        <SideNav></SideNav>
      </div>
      <div className="overflow-x-auto bg-[#F4F3F0] mx-4 px-8 py-1 rounded-xl col-span-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Created Time</th>
              <th>Login Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.email}</td>
                <td>{user.createdTime}</td>
                <td>{user.lastLoggedIn}</td>
                <td>
                  <div className="flex gap-1 text-xl text-[#FFFFFF] my-auto">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-[#EA4744] p-1 rounded-md"
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
