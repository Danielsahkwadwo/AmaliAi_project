import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import useScreenWidth from "../../CustomHooks/useScreenWidth";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import "./../styles.css";
import { ClipLoader } from "react-spinners";

function Login() {
  const Width = useScreenWidth();

  const GLOBAL_CONTEXT = useContext(AuthContext);
  const { isLoading, resetGlobals, loginUser } = GLOBAL_CONTEXT;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    resetGlobals();
  }, [navigate]);

  const submitData = async function (e) {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("all field are required");
    }

    //login user if there is not error
    await loginUser({ email, password });
  };

  let show;
  if (Width <= 768) {
    show = true;
  } else {
    show = false;
  }

  return (
    <>
      {show && <Navbar />}
      <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200 max-md:pt-28 max-md:px-3">
        {/* Left Image */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <img
            src="/Jan24 Blog3 400 x 229 listing Image-01.jpg"
            alt="Login Illustration"
            className="w-5/6 h-[70%] rounded-xl"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center lg:w-1/2 px-8 py-12 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-pink-700 mb-6">Login</h2>
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
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
                    <span>Login</span>
                  </div>
                </>
              ) : (
                <>
                  <span>Login</span>
                </>
              )}
            </button>
          </form>
          <div className="grid grid-cols-2 items-center mt-6 max-md:grid-cols-1 max-md:text-center">
            <p>
              <Link className="text-pink-700 font-semibold" to={"/"}>
                Back to home
              </Link>
            </p>
            <p className="font-semibold">
              Don't have an account?{" "}
              <Link className="text-pink-700" to={"/register"}>
                signup here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
