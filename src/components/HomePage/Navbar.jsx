import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigagte = useNavigate();
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold text-pink-700">
        <Link to={'/'}>
        <img
          className="w-[80px] h-[50px]"
          src="/Breast-Cancer-Ribbon-PNG-Image (1).png"
          alt=""
        />
        </Link>
      </div>
      <ul className="flex space-x-8 text-gray-700 font-semibold">
        <li>
          <NavLink to={"/scan"}>Scan Image</NavLink>
        </li>
        <li>
          <NavLink to={"/chat"}>Chat with our AI</NavLink>
        </li>
        <li>
          <NavLink to={"/screening"}>Screening</NavLink>
        </li>
        <li>
          <NavLink to={"/community"}>Community</NavLink>
        </li>
      </ul>
      <button
        className="bg-pink-700 text-white px-7 py-2 rounded-full hover:bg-pink-600 font-semibold"
        onClick={() => navigagte("/register")}
      >
        Sign up
      </button>
    </nav>
  );
}

export default Navbar;
