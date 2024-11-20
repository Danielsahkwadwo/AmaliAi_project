import Navbar from "./Navbar";
import Header from "./Header";
// import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-purple-200 via-purple-100 to-pink-200 md:h-screen max-md:h-auto">
      <Navbar />
      <div  className="max-md:pt-20">
      <Header />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
