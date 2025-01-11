import React from "react";
import { Helmet } from "react-helmet";
import SideNav from "../SideNav/SideNav";
import { Link, useLoaderData } from "react-router-dom";
import backHomeIcon from "../../src/assets/Group 44.png";

const ViewCoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, price, supplier, test, details, photo, category } = coffee;
  console.log("coffee from coffee details", coffee);
  return (
    <div className="md:max-w-7xl mx-auto grid grid-cols-5">
      <Helmet>
        <title>CoffeeStore | CoffeeDetails</title>
      </Helmet>
      <div>
        <SideNav></SideNav>
      </div>
      <div className="col-span-4 md:w-2/3 mx-auto">
        <div className="card bg-[#F4F3F0] shadow-xl">
          <Link to={`/`}>
            <img className="w-32 pl-2 pt-2" src={backHomeIcon} alt="" />
          </Link>
          <figure>
            <img src={photo} alt="coffee" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge bg-[#D2B48C] font-bold">
                {price},Tk
              </div>
            </h2>
            <p>
              <span className="font-bold">Category</span> : {category}
            </p>
            <p>
              <span className="font-bold">Test</span> : {test}
            </p>
            <p>
              <span className="font-bold">Quantity</span> : {quantity}
            </p>
            <p>
              <span className="font-bold">Supplier</span> : {supplier}
            </p>
            <p>
               {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffeeDetails;
