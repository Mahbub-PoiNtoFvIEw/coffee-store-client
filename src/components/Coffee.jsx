import React from "react";
import { FaEye } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Coffee = ({ aCoffee }) => {
  const { name, quantity, price, supplier, test, details, photo } = aCoffee;
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2><span className="font-bold">Name</span> : {name}</h2>
        <p><span className="font-bold">Quantity</span> : {quantity}</p>
        <p><span className="font-bold">Price</span> : {price} Taka</p>
        <p><span className="font-bold">Test</span> : {test}</p>
        <p>{details}</p>
      </div>
      <div className="card-body text-3xl text-[#FFFFFF] my-auto">
        <FaEye className="bg-[#D2B48C] p-1 rounded-md cursor-pointer"></FaEye>
        <MdModeEdit className="bg-[#3C393B] p-1 rounded-md cursor-pointer"></MdModeEdit>
        <MdDelete className="bg-[#EA4744] p-1 rounded-md cursor-pointer"></MdDelete>
      </div>
    </div>
  );
};

export default Coffee;
