import React from "react";
import { Helmet } from "react-helmet";
import { FaEye } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ aCoffee, coffees, setCoffees }) => {
  const { _id, name, quantity, price, supplier, test, details, photo } =
    aCoffee;

  const handleDelete = (id) => {
    console.log("deleted id", id);
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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl">
      <Helmet>
        <title>CoffeeStore | Coffee</title>
      </Helmet>
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2>
          <span className="font-bold">Name</span> : {name}
        </h2>
        <p>
          <span className="font-bold">Quantity</span> : {quantity}
        </p>
        <p>{details}</p>
      </div>
      <div className="card-body text-xl text-[#FFFFFF] my-auto">
        <Link to={`/viewCoffeeDetails/${_id}`}>
          <button className="bg-[#D2B48C] p-1 rounded-md">
            <FaEye></FaEye>
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-[#3C393B] p-1 rounded-md">
            <MdModeEdit></MdModeEdit>
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] p-1 rounded-md"
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default Coffee;
