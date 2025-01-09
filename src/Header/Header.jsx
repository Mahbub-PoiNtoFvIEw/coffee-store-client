import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="bg-slate-50 rounded-b-xl text-center py-4 pr-8 pl-2 mb-4 flex justify-between items-center">
        <div>
            <h2 className="text-3xl font-bold">@dminManager</h2>
        </div>
        <div className="flex gap-2 items-center">
            <Link to={`/signin`}><button className="btn font-bold">Sin In</button></Link>
            <Link to={`/signup`}><button className="btn font-bold">Sin Up</button></Link>
            <FaRegCircleUser className="text-4xl"></FaRegCircleUser>
        </div>
    </div>
  );
};

export default Header;
