import React, { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // create user in mongodb
        const createdTime = result.user?.metadata?.creationTime;
        const user = { email, createdTime };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Added user successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
            }
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-[#F4F3F0] rounded-xl">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">SignUp now!</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Place Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Place your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Place your password"
                className="input input-bordered"
                required
              />
              <div
                className="text-2xl text-slate-500 absolute top-12 right-1 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <FaRegEye></FaRegEye>
                ) : (
                  <FaRegEyeSlash></FaRegEyeSlash>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Place your Photo Url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#D2B48C]">Sign Up</button>
            </div>
          </form>
          <div className="px-8 mb-6">
            <p>
              Already have an account ? Please{" "}
              <Link to={"/signin"} className="text-blue-600 font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
