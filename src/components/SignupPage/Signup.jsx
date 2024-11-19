import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200">
      {/* Left Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img
          src="/metastatic20cancer.webp"
          alt="Signup Illustration"
          className="w-5/6 rounded-lg h-[75%]"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center lg:w-1/2 px-8 py-12 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Sign Up</h2>
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
              placeholder="Enter your username"
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
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-700 text-white py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="text-left mt-2">
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
