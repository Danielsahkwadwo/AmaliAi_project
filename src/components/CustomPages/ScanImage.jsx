import { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import Navbar from "../HomePage/Navbar";
import toast from "react-hot-toast";
import axios from "axios";
import AppLoader from "../Reusable/AppLoader";
import useRedirect from "../../CustomHooks/useRedirect";
import Disclaimer from "../Reusable/Disclaimer";

function ScanImage() {
  useRedirect("/login");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImageData] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageData(file);
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const sendResponseToAmaliAi = async (imageResponse) => {
    try {
      const { probability, prediction } = imageResponse;
      const response = await axios({
        method: "POST",
        url: "https://ai-api.amalitech.org/api/v1/public/chat",
        headers: { "X-Api-Key": "ZEXeGOk5_kMel9l7EzrWblpzbHM2P5FZ" },
        data: {
          prompt: `As a breast cancer specialist, i want you to interprate a breast momograph image scan that resulted in a prediction of ${prediction} and a probability of ${probability}. try to explain it in simple terms so that it will be quite understandable`,
          stream: false,
        },
      });
      if (response.data) {
        setResult(response.data.data.content);
        // console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!image) {
        return toast.error("please upload an image");
      }
      const formData = new FormData();
      formData.append("image", imageData);

      // console.log(Array.from(formData));
      const res = await axios.post(
        "https://breast-cancer-detection-v1-1.onrender.com/predict/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (res.data) {
        // console.log(res);
        const probability = res.data.probability;
        const prediction = res.data.prediction;
        await sendResponseToAmaliAi({ probability, prediction });
      }
    } catch (error) {
      console.log(error);
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-purple-200">
      <Navbar />
      {isLoading && <AppLoader />}
      {/* Header Section */}
      <div className="flex flex-col items-center text-center py-12 bg-pink-200 max-md:px-5 max-sm:px-4 max-md:pt-32">
        <img
          src="/Breast-Cancer-Ribbon-PNG-Image (1).png"
          alt="Breast Cancer Awareness"
          className="mb-6 w-48 h-32 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold text-pink-800">
          Breast Cancer Detection
        </h1>
        <p className="mt-4 text-gray-700">
          Upload an image for diagnosis. Early detection saves lives.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="px-6 lg:px-20 py-12">
        {/* Image Upload Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-pink-800 mb-6">
            Upload Image
          </h2>
          <p className="text-gray-600 mb-4">
            Please upload a clear mammogram or breast scan image to get started.
          </p>

          <div className="flex flex-col items-center my-10">
            <div className="flex items-center justify-between gap-5 mb-5 max-sm:flex-col">
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-10 rounded-md shadow-md transition duration-300 flex items-center gap-2"
              >
                <BiCloudUpload size={35} color="#ffffff" />
                Upload Image
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                files={imageData}
              />
              <button
                onClick={submitImage}
                className="bg-pink-700 hover:bg-pink-600 transition-all duration-300 text-white px-10 py-4 rounded-md max-sm:w-full"
              >
                Scan Now
              </button>
            </div>
            {image && (
              <img
                src={image}
                alt="Uploaded Preview"
                className="mt-4 w-48 h-48 rounded-lg shadow-md"
              />
            )}
          </div>
        </div>

        {/* Diagnosis Results Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-pink-800 mb-6">
            Diagnosis Results
          </h2>
          <p className="text-gray-600 mb-4">
            Your diagnosis result will appear below after processing.
          </p>

          <div className="text-center">
            {result ? (
              <p className="text-lg font-semibold text-green-600">{result}</p>
            ) : (
              <p className="text-gray-500">
                No results yet. Please upload an image.
              </p>
            )}
          </div>
        </div>
        <div className="mt-5">
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}

export default ScanImage;
