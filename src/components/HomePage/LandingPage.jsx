import Navbar from "./Navbar";
import Header from "./Header";
import Disclaimer from "../Reusable/Disclaimer";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import AppLoader from "../Reusable/AppLoader";
// import Footer from "./Footer";

function LandingPage() {

  const GLOBAL_CONTEXT = useContext(AuthContext);
  const { isLoading } = GLOBAL_CONTEXT;

  return (
    <>
    {isLoading && <AppLoader/>}
      <div className="bg-gradient-to-r from-purple-200 via-purple-100 to-pink-200 md:h-screen max-md:h-auto">
        <Navbar />
        <div className="max-md:pt-20">
          <Header />
          {/* <Disclaimer/> */}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default LandingPage;
