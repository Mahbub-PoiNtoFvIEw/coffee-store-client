import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passValidation, setPassValidation] = useState("");
  const [userExist, setUserExist] = useState("");
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    setPassValidation("");
    setUserExist("");

    if(password.length <8){
      setPassValidation('Password must be 8 character or longer');
      return;
    }
    if(!/(?=.*[A-Z])/.test(password)){
      setPassValidation("Ensures at least one uppercase letter");
      return;
    }
    if(!/(?=.*[a-zA-Z])/.test(password)){
      setPassValidation("Ensures at least one letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/signin');
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
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.error(error.message);
        setUserExist("Email already in used")
      });
  };

  const handleGoogleLogin = () =>{
    loginWithGoogle()
    .then(result=>{
      console.log('google user', result.user);
      navigate('/')
    })
    .catch(error=>{
      console.error(error.message);
    })
  }

  return (
    <div className="md:max-w-7xl mx-auto hero min-h-screen bg-[#F4F3F0] rounded-xl">
      <Helmet>
        <title>CoffeeStore | SignUp</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">SignUp now!</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body py-0">
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
            <p className="text-red-600 font-bold">{passValidation}</p>
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
            <div className="form-control mt-3">
              <button className="btn bg-[#D2B48C]">Sign Up</button>
            </div>
          </form>
          <div className="px-8 space-y-1 mb-3">
            <div className="mt-2 flex md:flex-row flex-col">
              <button onClick={handleGoogleLogin} className="btn bg-[#D2B48C99] md:w-1/2 w-full"><FcGoogle className="text-2xl"></FcGoogle><span className="md:hidden block">Sign in with</span>Google</button>
              <button className="btn bg-[#D2B48C99] md:w-1/2 w-full"><FaGithub className="text-2xl"></FaGithub><span className="md:hidden block">Sign in with</span>GitHub</button>
            </div>
            <p className="text-red-600 font-bold">{userExist}</p>
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
