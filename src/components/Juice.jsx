import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Juice = () => {
  const loadedJuice = useLoaderData();
  const [juices, setJuices] = useState(loadedJuice);
  console.log(juices);

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
        fetch(`http://localhost:5000/juice/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your juice has been deleted.",
                icon: "success",
              });
              const remaining = juices.filter((cof) => cof._id !== id);
              setJuices(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>DrinksStore | JuiceItems</title>
      </Helmet>
      <h2 className="text-center font-bold text-4xl my-6">Juice Items</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2">
        {juices.map((juice) => (
          <>
            <div className="md:flex items-center rounded-xl bg-[#F5F4F1] shadow-xl">
              <figure>
                <img
                  className="w-24 pl-2 mx-auto"
                  src={juice.photo}
                  alt="Movie"
                />
              </figure>
              <div className="flex py-6 justify-evenly gap-8 px-4">
                <div className="flex-grow space-y-3">
                  <h2>
                    <span className="font-bold">Name</span> : {juice.name}
                  </h2>
                  <p>
                    <span className="font-bold">Quantity</span> :{" "}
                    {juice.quantity}
                  </p>
                  <p>{juice.details}</p>
                </div>
                <div className="text-xl text-[#FFFFFF] my-auto flex flex-col">
                  <Link to={`/viewJuiceDetails/${juice._id}`}>
                    <button className="bg-[#D2B48C] p-1 rounded-md">
                      <FaEye></FaEye>
                    </button>
                  </Link>
                  <Link to={`/updateJuice/${juice._id}`}>
                    <button className="bg-[#3C393B] p-1 rounded-md">
                      <MdModeEdit></MdModeEdit>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(juice._id)}
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

export default Juice;
