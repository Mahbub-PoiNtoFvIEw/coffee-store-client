import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import backHomeIcon from "../../src/assets/Group 44.png";
import { Helmet } from "react-helmet";
import SideNav from "../SideNav/SideNav";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, price, supplier, test, details, photo, category } =
    coffee;

  const handleUpdateCoffee = (e) => {
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

    const updatedCoffee = {
      name,
      quantity,
      price,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="md:max-w-7xl mx-auto grid grid-cols-5">
      <Helmet>
        <title>DrinksStore | UpdateCoffee</title>
      </Helmet>
      <div>
        <SideNav></SideNav>
      </div>
      <div className="bg-[#F4F3F0] px-8 py-1 rounded-xl col-span-4">
        <Link to={`/`}><img className="w-32" src={backHomeIcon} alt="" /></Link>
        <div className="text-center space-y-3 mb-4">
          <h2 className="text-3xl font-extrabold">Update a Coffee</h2>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name and quantity row */}
          <div className="md:flex gap-2">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                defaultValue={name}
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
                  defaultValue={quantity}
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
                  defaultValue={price}
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
                defaultValue={supplier}
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
                defaultValue={test}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block my-4 bg-[#D2B48C]"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
