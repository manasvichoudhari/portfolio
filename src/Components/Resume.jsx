import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const resumePreview = "/resume.pdf"; 

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const handleResumeToggle = () => {
    setShowResume(!showResume);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            My Resume
          </h2>
          <p className="mt-4 text-lg text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            A snapshot of my academic achievements, technical skills, and project experience. I’m always open to feedback and opportunities!
          </p>
        </div>

        {/* Button */}
        <div className="text-center mb-12" data-aos="fade-up">
          <button
            onClick={handleResumeToggle}
            aria-expanded={showResume}
            aria-controls="resume-preview"
            className="px-8 py-3 bg-indigo-600 text-white font-sans font-semibold text-lg rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
          >
            {showResume ? "Close Resume" : "View Resume"}
          </button>
        </div>

        {/* Resume Display with Preview Image */}
        {showResume && (
          <div
            className="mt-12 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={resumePreview} // Your resume image
              alt="Manasvi Choudhari's Resume Preview"
              className="w-full rounded-xl shadow-lg border-4 border-indigo-500/30"
              loading="lazy"
            />
            <div className="mt-6 text-center">
              <a
                href="/resume.pdf" // Your resume PDF path
                download="Manasvi_Choudhari_Resume.pdf"
                className="inline-block px-6 py-2 bg-transparent border-2 border-indigo-400 text-indigo-400 font-sans font-medium rounded-full hover:bg-indigo-400 hover:text-white transition-all duration-300"
              >
                Download PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;