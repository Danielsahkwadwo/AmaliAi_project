import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import useScreenWidth from "../../CustomHooks/useScreenWidth";
import { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import { ClipLoader } from "react-spinners";
import "./../styles.css";

const initialStates = {
  email: "",
  username: "",
  password: "",
  confirm_password: "",
};
function Signup() {
  const Width = useScreenWidth();
  const GLOBAL_CONTEXT = useContext(AuthContext);
  const { isLoading, registerUser, resetGlobals } = GLOBAL_CONTEXT;
  const [userData, setUserData] = useState(initialStates);

  const navigate = useNavigate();

  const handleInputChange = function (e) {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    resetGlobals();
  }, [navigate]);

  const submitData = async function (e) {
    e.preventDefault();
    if (
      !userData.email ||
      !userData.username ||
      !userData.password ||
      !userData.confirm_password
    ) {
      return toast.error("all fields are required");
    }
    if (userData.username.length < 3) {
      return toast.error("username cannot be less than 3 characters");
    }
    if (userData.password.length < 6) {
      return toast.error("password cannot be less than 6 characters");
    }
    if (
      !userData.email.match(
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    ) {
      return toast.error("Please enter a valid email");
    }
    if (userData.password !== userData.confirm_password) {
      return toast.error("passwords do not match");
    }

    await registerUser(userData);
    //create user if no error
  };

  let show;
  if (Width <= 768) {
    show = true;
  } else {
    show = false;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200 max-md:pb-10">
      {show && <Navbar />}
      {/* Left Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img
          src="/metastatic20cancer.webp"
          alt="Signup Illustration"
          className="w-5/6 rounded-lg h-[75%]"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center lg:w-1/2 px-8 py-12 bg-white rounded-lg shadow-lg max-md:mx-3 max-md:mt-24">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Sign Up</h2>
        <form onSubmit={submitData} className="w-full max-w-md space-y-6">
          {/* Email */}
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Username */}
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={userData.username}
              onChange={handleInputChange}
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm_password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={userData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit--btn w-full bg-pink-700 text-white py-3 rounded-lg hover:bg-pink-600 transition"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="flex items-center justify-center gap-5">
                  <span style={{ marginTop: "8px" }}>
                    <ClipLoader color="#fff" size={20} />
                  </span>
                  <span>Sign Up</span>
                </div>
              </>
            ) : (
              <>
                <span>Sign Up</span>
              </>
            )}
          </button>
        </form>
        <div className="text-left mt-2 max-sm:mt-5">
          <p className="font-semibold">
            Already registered?{" "}
            <Link className="text-pink-700" to={"/login"}>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
