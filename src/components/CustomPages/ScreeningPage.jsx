import React, { useState } from "react";
import Navbar from "../HomePage/Navbar";
import axios from "axios";
import AppLoader from "../Reusable/AppLoader";
import toast from 'react-hot-toast';

const ScreeningPage = () => {
  const [healthTip, setHealthTip] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const lessons = [
    {
      title: "What is Breast Screening?",
      description:
        "Learn the basic structure of the breast to identify abnormalities during screening.",
      videoUrl: "https://www.youtube.com/watch?v=6SAhNkuAF_4",
    },
    {
      title: "Step 1: Visual Inspection",
      description:
        "Learn how to visually inspect your breasts for any changes in size, shape, or skin texture.",
      videoUrl: "https://www.youtube.com/watch?v=4ooGLeFucW4&list=PLy56aUjhRF4kYx38twf6FaXTNzKhyBfjh&index=13",
    },
    {
      title: "Step 2: Manual Examination",
      description:
        "Learn proper techniques to feel for lumps or unusual masses in different parts of the breast.",
      videoUrl: "https://example.com/video3",
    },
    {
      title: "Step 3: Screening in Front of a Mirror",
      description:
        "Learn to screen effectively using reflections to identify symmetry and skin texture.",
      videoUrl: "https://example.com/video4",
    },
    {
      title: "Step 4: Lying Down Position",
      description:
        "Learn how to screen while lying down for better coverage of breast tissue.",
      videoUrl: "https://example.com/video5",
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
      return toast.error('An error occurred')
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
            Screening Sessions
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
