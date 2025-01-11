import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import SideNav from "../SideNav/SideNav";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;

    console.log(name, photo);

    updateUserProfile(name, photo)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Updated Profile successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate('/');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="md:max-w-7xl mx-auto md:grid grid-cols-5">
      <Helmet>
        <title>DrinksStore | UpdateProfile</title>
      </Helmet>
      <div>
        <SideNav></SideNav>
      </div>
      <div className="bg-[#F4F3F0] mx-4 px-8 py-1 rounded-xl col-span-4">
        <div className="text-center space-y-3 mb-4">
          <h2 className="text-3xl font-extrabold">Update Your Profile</h2>
        </div>
        <form onSubmit={handleUpdateProfile}>
          <div className="md:flex gap-2">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Your Name</span>
              </div>
              <input
                type="text"
                placeholder="Place Your Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Place Your PhotoURL"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Your Email</span>
              </div>
              <input
                type="email"
                className="input rounded-none text-2xl bg-[#F4F3F0] border border-b-slate-400 w-full text-red-700"
                name="email"
                defaultValue={user?.email}
                // disabled
              />
            </label>
          </div>
          <input
            type="submit"
            value="Update Your Profile"
            className="btn btn-block my-4 bg-[#D2B48C]"
          />
        </form>
      </div>
      {/* <div className="col-span-4">
        <h2>Update your profile</h2>
        <form onSubmit={handleUpdateProfile}>
          <input type="text" name="name" placeholder="Your name" />
          <br />
          <input type="text" name="photo" placeholder="Your photo url" id="" />
          <br />
          <input
            className="text-red-700"
            type="text"
            name="email"
            defaultValue={user?.email}
            disabled
          />
          <br />
          <input className="btn" type="submit" value="Update Profile" />
        </form>
      </div> */}
    </div>
  );
};

export default UpdateProfile;
