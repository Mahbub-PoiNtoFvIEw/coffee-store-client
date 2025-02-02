import React, { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {signInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result=>{
        console.log(result.user);
        navigate('/');
        const user = {
            email,
            lastLoginTime: result.user?.metadata?.lastSignInTime
        }
        // update last login time in the database
        fetch('http://localhost:5000/user',{
            method: "PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    })
    .catch(error=>{
        console.error(error.message);
    })
  };

  return (
    <div className="md:max-w-7xl mx-auto hero min-h-screen bg-[#F4F3F0] rounded-xl">
      <Helmet>
        <title>CoffeeStore | Signin</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">SignIn now!</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#D2B48C]">Sign In</button>
            </div>
          </form>
          <div className="px-8 mb-6">
            <p>
              do not have an account ? Please{" "}
              <Link to={"/signup"} className="text-blue-600 font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
