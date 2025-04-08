import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ss from "../../assets/Screen.png";
import ss2 from "../../assets/ss.png";
import manu from "../../assets/man.jpg";

import "@fontsource/poppins";
import "@fontsource/playfair-display";

const certificates = [
  {
    id: 1,
    title: "MERN Stack Development",
    description:
      "Completed a project-based certification in MERN stack development, mastering MongoDB, Express, React, and Node.js to build modern web applications.",
    image: ss,
    link: "https://drive.google.com/file/d/1hGclKzqgzM6xoSdOogHu_IBO5jBDJYUc/view?usp=sharing",
  },
  {
    id: 2,
    title: "Hackathon Participation",
    description:
      "Collaborated in an inter-polytechnic hackathon, developing innovative solutions with HTML, CSS, and JavaScript under tight deadlines.",
    image: ss2,
    link: "https://drive.google.com/file/d/18MOXrSBbkqNWSKnl_QPPOUMoe-LAmkbL/view?usp=sharing",
  },
];

const skills = [
  { src: "https://img.icons8.com/color/48/000000/html-5.png", alt: "HTML Icon", label: "HTML" },
  { src: "https://img.icons8.com/color/48/000000/css3.png", alt: "CSS Icon", label: "CSS" },
  { src: "https://img.icons8.com/color/48/000000/javascript.png", alt: "JavaScript Icon", label: "JavaScript" },
  { src: "https://img.icons8.com/offices/40/000000/react.png", alt: "React Icon", label: "React" },
  { src: "https://img.icons8.com/ios/50/000000/git.png", alt: "Git Icon", label: "Git" },
];

const SkillCard = ({ src, alt, label }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <img src={src} alt={alt} className="w-12 h-12" loading="lazy" />
    <span className="mt-2 text-sm font-medium text-gray-200">{label}</span>
  </div>
);

const CertificateCard = ({ title, description, image, link }) => (
  <div
    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
    data-aos="fade-up"
  >
    <img src={image} alt={`${title} Certificate`} className="w-full h-48 object-cover" loading="lazy" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-indigo-400">{title}</h3>
      <p className="mt-2 text-gray-300 font-poppins text-sm leading-relaxed">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
      >
        View Certificate
      </a>
    </div>
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl font-bold font-playfair tracking-tight">About Me</h2>
          <p className="mt-2 text-lg text-gray-400 font-poppins">
            Engineer by Degree, Innovator by Passion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center" data-aos="zoom-in">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500/20">
              <img
                src={manu}
                alt="Manasvi's Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-full pointer-events-none" />
          </div>

          <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-3xl font-playfair font-semibold">
              Hello, I’m <span className="text-indigo-400">Manasvi</span>
            </h3>
            <p className="text-lg text-gray-300 font-poppins leading-relaxed">
              A BTech student at Ujjain Engineering College with a strong passion for front-end development. I specialize in crafting responsive and visually engaging web interfaces using HTML, CSS, JavaScript, and React.
            </p>
            <p className="text-lg text-gray-300 font-poppins leading-relaxed">
              I thrive on turning creative ideas into real-world digital experiences. Whether it's building pixel-perfect UIs or solving design-to-code challenges, I enjoy working on projects that blend creativity with technical precision.
            </p>
            <p className="text-lg text-gray-300 font-poppins leading-relaxed">
              Outside of coding, I'm constantly exploring emerging tech trends, participating in hackathons, and collaborating on innovative solutions. My mission is to design web experiences that are not only functional but also impactful and memorable.
            </p>
          </div>
        </div>

        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-playfair font-semibold text-center text-indigo-400 mb-10">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-playfair font-semibold text-center text-indigo-400 mb-10">
            My Learning Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} {...cert} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="400">
          <Link to="/contacts">
            <button className="bg-indigo-600 text-white py-3 px-10 rounded-full font-poppins text-lg font-medium shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300">
              Let’s Connect
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;