import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import SideNav from "../SideNav/SideNav";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;

    console.log(name, photo);

    updateUserProfile(name, photo)
      .then((result) => {
        console.log(result);
      })
      .then((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="md:max-w-7xl mx-auto grid grid-cols-5">
      <Helmet>
        <title>CoffeeStore | UpdateProfile</title>
      </Helmet>
      <div>
        <SideNav></SideNav>
      </div>
      <div className="col-span-4">
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
      </div>
    </div>
  );
};

export default UpdateProfile;
