import { useState } from "react";
import Navbar from "../HomePage/Navbar";

const ScreeningPage = () => {
  const [healthTip, setHealthTip] = useState("");

  const lessons = [
    {
      title: "Understanding Breast Anatomy",
      description: "Learn the basic structure of the breast to identify abnormalities during screening.",
      videoUrl: "https://example.com/video1",
    },
    {
      title: "Step 1: Visual Inspection",
      description: "Learn how to visually inspect your breasts for any changes in size, shape, or skin texture.",
      videoUrl: "https://example.com/video2",
    },
    {
      title: "Step 2: Manual Examination",
      description: "Learn proper techniques to feel for lumps or unusual masses in different parts of the breast.",
      videoUrl: "https://example.com/video3",
    },
    {
      title: "Step 3: Screening in Front of a Mirror",
      description: "Learn to screen effectively using reflections to identify symmetry and skin texture.",
      videoUrl: "https://example.com/video4",
    },
    {
      title: "Step 4: Lying Down Position",
      description: "Learn how to screen while lying down for better coverage of breast tissue.",
      videoUrl: "https://example.com/video5",
    },
  ];

  const generateHealthTip = () => {
    // Simulating a call to AI for random breast health tips
    const tips = [
      "Perform a breast self-exam at least once a month.",
      "Know what is normal for your breasts and report changes promptly.",
      "Eat a balanced diet to maintain overall breast health.",
      "Minimize alcohol consumption to lower breast cancer risk.",
      "Get regular mammograms as recommended by your doctor.",
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setHealthTip(randomTip);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-100 flex flex-col">
      <Navbar/>
      {/* Top Section */}
      <div className="p-8 text-center bg-pink-500 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Breast Self-Screening Guide</h1>
        <p className="mt-4 text-lg">Follow these lessons to screen your breasts at home effectively.</p>
        <div className="mt-6">
          <button
            onClick={generateHealthTip}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300"
          >
            Generate Random Breast Health Tip
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
        <h2 className="text-2xl font-bold text-pink-700 mb-6">Screening Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-2">{lesson.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{lesson.description}</p>
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
  );
}

export default ScreeningPage
