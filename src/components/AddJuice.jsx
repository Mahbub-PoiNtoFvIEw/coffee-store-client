import React from "react";
import SideNav from "../SideNav/SideNav";
import { Helmet } from "react-helmet";
import backHomeIcon from "../../src/assets/Group 44.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddJuice = () => {
  const handelAddJuice = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newJuice = {
      name,
      quantity,
      price,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(newJuice);

    fetch("http://localhost:5000/juice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJuice),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added new juice successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="md:max-w-7xl mx-auto md:grid grid-cols-5">
      <Helmet>
        <title>CoffeeStore | AddDrink</title>
      </Helmet>
      <div>
        <SideNav></SideNav>
      </div>
      <div className="bg-[#F4F3F0] mx-4 px-8 py-1 rounded-xl col-span-4">
        <Link to={`/`}>
          <img className="w-32" src={backHomeIcon} alt="" />
        </Link>
        <div className="text-center space-y-3 mb-4">
          <h2 className="text-3xl font-extrabold">Add a juice</h2>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handelAddJuice}>
          {/* form name and quantity row */}
          <div className="md:flex gap-2">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Juice Name</span>
              </div>
              <input
                type="text"
                placeholder="Juice Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
            <div className="md:w-1/2 md:flex gap-1">
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Available Quantity</span>
                </div>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier nad test row */}
          <div className="md:flex gap-2">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Supplier Name</span>
              </div>
              <input
                type="text"
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Test</span>
              </div>
              <input
                type="text"
                name="test"
                placeholder="Test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form category and details row */}
          <div className="md:flex gap-2">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form photo url row */}
          <div className="">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo Url</span>
              </div>
              <input
                type="text"
                placeholder="Photo Url"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add New Juice"
            className="btn btn-block my-4 bg-[#D2B48C]"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJuice;
