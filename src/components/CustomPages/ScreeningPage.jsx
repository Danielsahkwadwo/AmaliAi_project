import React, { useState } from "react";
import Navbar from "../HomePage/Navbar";
import axios from "axios";
import AppLoader from "../Reusable/AppLoader";
import toast from "react-hot-toast";

const ScreeningPage = () => {
  const [healthTip, setHealthTip] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const lessons = [
    {
      title: "What is Breast Screening?",
      description:
        "The video provides an overview of breast screening, its purpose, methods, and importance in early detection of breast cancer.",
      videoUrl: "https://www.youtube.com/watch?v=6SAhNkuAF_4",
    },
    {
      title: "What you need to know about breast cancer",
      description:
        "The video offers key information on breast cancer, including risk factors, symptoms, diagnosis, treatment options, and prevention strategies.",
      videoUrl:
        "https://www.youtube.com/watch?v=4ooGLeFucW4&list=PLy56aUjhRF4kYx38twf6FaXTNzKhyBfjh&index=13",
    },
    {
      title: "How to Perform a Breast Self-Examination",
      description:
        "The video demonstrates step-by-step instructions on how to properly perform a breast self-examination to detect any unusual changes or lumps.",
      videoUrl:
        "https://www.youtube.com/watch?v=KF3bumQhhKw&pp=ygUdY29uZHVjdGluZyBhIHNlbGYgYnJlYXN0IGV4YW0%3D",
    },
    {
      title: "Signs on breast you should not ignore",
      description:
        "The video highlights warning signs of breast abnormalities, such as lumps, skin changes, or nipple discharge, that should prompt medical attention.",
      videoUrl:
        "https://www.youtube.com/watch?v=WSWPLzUJkGw&pp=ygUfd2h5IHlvdSBzaG91bGQgaGF2ZSBhIG1hbW1vZ3JhbQ%3D%3D",
    },
    {
      title: "Frequently Asked Questions About Breast Cancer",
      description:
        "The video addresses common questions about breast cancer, covering topics like risk factors, symptoms, screening, treatment, and prognosis.",
      videoUrl:
        "https://www.youtube.com/watch?v=Ypt-coFm6Kk&pp=ygUfd2h5IHlvdSBzaG91bGQgaGF2ZSBhIG1hbW1vZ3JhbQ%3D%3D",
    },
    {
      title: "How to Recognize Breast Cancer Symptoms",
      description:
        "The video explains how to identify common breast cancer symptoms, such as lumps, changes in breast appearance, or unusual pain, for early detection.",
      videoUrl:
        "https://www.youtube.com/watch?v=yTHyMNBkbOY&pp=ygUfd2h5IHlvdSBzaG91bGQgaGF2ZSBhIG1hbW1vZ3JhbQ%3D%3D",
    },
  ];

  const generateHealthTip = async () => {
    setIsLoading(true);
    try {
      const res = await axios(
        "https://ai-api.amalitech.org/api/v1/public/chat",
        {
          method: "POST",
          headers: { "X-Api-Key": "ZEXeGOk5_kMel9l7EzrWblpzbHM2P5FZ" },
          data: {
            prompt:
              "As a mastologist, suggest some tips to keep breast safe from breast cancer, achieve this with a maximum of two sentences and a word count of 40",
            modelId: "a58c89f1-f8b6-45dc-9727-d22442c99bc3",
            stream: false,
          },
        }
      );

      if (res) {
        setHealthTip(res.data.data.content);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      {isLoading && <AppLoader />}
      <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-100 flex flex-col">
        <Navbar />
        {/* Top Section */}
        <div className="p-8 text-center bg-pink-500 text-white shadow-lg max-md:mt-20">
          <h1 className="text-3xl font-bold">Breast Self-Screening Guide</h1>
          <p className="mt-4 text-lg">
            Follow these lessons to screen your breasts at home effectively.
          </p>
          <div className="mt-6">
            <button
              onClick={generateHealthTip}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300"
            >
              Get Breast Health Tips
            </button>
          </div>
          {healthTip && (
            <div className="mt-6 bg-white text-pink-700 py-4 px-6 rounded-lg shadow-md">
              <p className="font-medium">{healthTip}</p>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="p-8 lg:px-20 pb-20">
          <h2 className="text-2xl font-bold text-pink-700 mb-6">
            Screening Sessions & FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-700 mb-2">
                  {lesson.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {lesson.description}
                </p>
                <a
                  href={lesson.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md inline-block transition duration-300"
                >
                  Watch Video
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScreeningPage;
