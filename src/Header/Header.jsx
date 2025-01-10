import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="md:max-w-7xl mx-auto">
      <div className="bg-slate-50 rounded-b-xl py-4 pr-8 pl-2 mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">@dminManager</h2>
          {user && (
            <p>
              <span className="font-bold">LastLogin : </span>
              {user?.metadata?.lastSignInTime}
            </p>
          )}
        </div>
        <div className="flex gap-2 items-center">
          {user ? (
            <div>
              {user?.photoURL ? (
                <img
                  className="w-12 h-12 rounded-full border-2 border-black p-1"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <p className="w-12 h-12 rounded-full border-2 border-black text-4xl text-center font-bold text-blue-600">
                  {user?.email.charAt(0).toUpperCase()}
                </p>
              )}
            </div>
          ) : (
            <>
              <Link to={`/signin`}>
                <button className="btn font-bold">Sin In</button>
              </Link>
              <Link to={`/signup`}>
                <button className="btn font-bold">Sin Up</button>
              </Link>
            </>
          )}

          {/* <FaRegCircleUser className="text-4xl"></FaRegCircleUser> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
