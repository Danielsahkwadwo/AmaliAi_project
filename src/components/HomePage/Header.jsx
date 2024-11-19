import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-10 py-10 max-w-7xl mx-auto">
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Breast <span className="text-pink-700 capitalize">cancer prevention</span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Nobis, consequuntur?
        </p>
        <button className="bg-pink-700 text-white px-10 py-3 rounded-full hover:bg-pink-600">
          <Link to={"/login"}>Get started &rarr;</Link>
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
