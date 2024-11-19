import HashLoader from "react-spinners/HashLoader";

const AppLoader = () => {
  return (
    <div className="fixed inset-0 bg-pink-100 bg-opacity-70 z-50 flex items-center justify-center">
      <HashLoader color={"#d91abe"} size={50} aria-label="HashLoader" />
    </div>
  );
};

export default AppLoader;
