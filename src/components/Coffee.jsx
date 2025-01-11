import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  console.log(coffees);
  // const [juices, setJuice] = useState(loadedJuice);
  // const { _id, name, quantity, price, supplier, test, details, photo } = aCoffee;

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
    <div>
      <Helmet>
        <title>DrinksStore | CoffeeItems</title>
      </Helmet>
      <h2 className="text-center font-bold text-4xl my-6">Coffee Items</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2">
        {coffees.map((coffee) => (
          <>
            <div className="md:flex items-center rounded-xl bg-[#F5F4F1] shadow-xl">
              <figure>
                <img
                  className="w-24 pl-2 mx-auto"
                  src={coffee.photo}
                  alt="Movie"
                />
              </figure>
              <div className="flex py-6 justify-evenly gap-8 px-4">
                <div className="flex-grow space-y-3">
                  <h2>
                    <span className="font-bold">Name</span> : {coffee.name}
                  </h2>
                  <p>
                    <span className="font-bold">Quantity</span> :{" "}
                    {coffee.quantity}
                  </p>
                  <p>{coffee.details}</p>
                </div>
                <div className="text-xl text-[#FFFFFF] my-auto flex flex-col">
                  <Link to={`/viewCoffeeDetails/${coffee._id}`}>
                    <button className="bg-[#D2B48C] p-1 rounded-md">
                      <FaEye></FaEye>
                    </button>
                  </Link>
                  <Link to={`/updateCoffee/${coffee._id}`}>
                    <button className="bg-[#3C393B] p-1 rounded-md">
                      <MdModeEdit></MdModeEdit>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(coffee._id)}
                    className="bg-[#EA4744] p-1 rounded-md"
                  >
                    <MdDelete></MdDelete>
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
