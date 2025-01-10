import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Juice = ({ juice, juices, setJuices }) => {
  const { _id, name, quantity, price, supplier, test, details, photo } = juice;
  console.log("juice", juice);
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl">
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

export default Juice;
