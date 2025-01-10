import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Header = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-slate-50 rounded-b-xl text-center py-4 pr-8 pl-2 mb-4 flex justify-between items-center">
        <div>
            <h2 className="text-3xl font-bold">@dminManager</h2>
        </div>
        <div className="flex gap-2 items-center">
          {
            user?
            <div className="w-10 h-10 rounded-full border border-black text-3xl text-center font-bold text-blue-600">
              {
                user?.photoURL?<img className="w-5 ml-2 mt-1" src={user.photoURL} alt="" />
                :
                !user?.photoURL?
                <p className="text-center">{user?.email.charAt(0).toUpperCase()}</p>
                :
                <p>jj</p>
              }
            </div>
            :
            <>
              <Link to={`/signin`}><button className="btn font-bold">Sin In</button></Link>
              <Link to={`/signup`}><button className="btn font-bold">Sin Up</button></Link>
            </>
          }
            
            
            {/* <FaRegCircleUser className="text-4xl"></FaRegCircleUser> */}
        </div>
    </div>
  );
};

export default Header;
