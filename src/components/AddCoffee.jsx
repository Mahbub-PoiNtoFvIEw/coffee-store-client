import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
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

    const newCoffee = {
      name,
      quantity,
      price,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added coffee successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] px-32 py-10">
      <div className="text-center space-y-3 mb-4">
        <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
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
          value="Add Coffee"
          className="btn btn-block my-4 bg-[#D2B48C]"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
