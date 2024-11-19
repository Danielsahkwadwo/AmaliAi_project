import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200">
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
        <form className="w-full max-w-md space-y-6">
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
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-700 text-white py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>
        <div className="grid grid-cols-2 items-center mt-6">
          <p>
            <Link className="text-pink-700 font-semibold" to={"/"}>
              Back to home
            </Link>
          </p>
          <p className="font-semibold">
            dont have account?{" "}
            <Link className="text-pink-700" to={"/register"}>
              signup here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
