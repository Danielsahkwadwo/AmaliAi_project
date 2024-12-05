import { Link } from "react-router-dom";
import Disclaimer from "../Reusable/Disclaimer";

function Header() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-10 py-10 max-w-7xl mx-auto">
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Breast{" "}
          <span className="text-pink-700 capitalize">cancer prevention</span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Upload your mammogram and let our advanced machine learning model
          provide a quick prediction. Designed to assist with early
          detection, our system empowers you with insights for better health
          decisions. Your well-being is our priority.
        </p>
        <Disclaimer />
        <button className="bg-pink-700 text-white px-10 py-3 rounded-full hover:bg-pink-600">
          <Link to={"/scan"}>Get started &rarr;</Link>
        </button>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <img
          src="/brst_001.webp"
          alt="Cancer prevention illustration"
          className="header--image w-full rounded-lg"
        />
      </div>
    </section>
  );
}

export default Header;
