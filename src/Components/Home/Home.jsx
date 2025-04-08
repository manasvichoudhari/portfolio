import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Buttons from "./Buttons";
 // Adjust path according to your folder structure
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaRocket, FaPalette, FaLaptopCode, FaBrain } from "react-icons/fa";

// Social Links Data
const socialLinks = [
  { href: "https://github.com/manasvichoudhari", icon: <FaGithub size={30} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/manasvi-choudhari", icon: <FaLinkedin size={30} />, label: "LinkedIn" },
  { href: "https://twitter.com/yourusername", icon: <FaTwitter size={30} />, label: "Twitter" },
];

// Updated Skills Data
const skills = [
  { icon: <FaCode size={40} />, title: "Development", desc: "Building responsive, scalable web solutions." },
  { icon: <FaRocket size={40} />, title: "Innovation", desc: "Pushing boundaries with creative tech." },
  { icon: <FaPalette size={40} />, title: "Design", desc: "Crafting visually stunning interfaces." },
  { icon: <FaLaptopCode size={40} />, title: "Frontend", desc: "Mastering React, JS, and modern frameworks." },
  { icon: <FaBrain size={40} />, title: "Problem Solving", desc: "Tackling challenges with smart solutions." },
];

// Social Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-14 h-14 rounded-xl bg-gray-800/70 hover:bg-indigo-600 transition-all duration-300 ease-in-out"
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <span className="text-indigo-400 group-hover:text-white transition-colors duration-300">
      {icon}
    </span>
    <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm font-sans py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out shadow-md">
      {label}
    </span>
  </motion.a>
);

// Skill Card Component
const SkillCard = ({ icon, title, desc }) => (
  <motion.div
    className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl shadow-lg hover:bg-gray-700/70 transition-all duration-300"
    whileHover={{ scale: 1.05, y: -5 }}
  >
    <span className="text-indigo-400 mb-4">{icon}</span>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-center">{desc}</p>
  </motion.div>
);

const Home = () => {
  // Sentences for Typing Effect
  const sentences = [
    "Web Developer Extraordinaire",
    "Creative UI/UX Designer",
    "Innovator in Tech Solutions",
    "Frontend Enthusiast",
    "Building Your Digital Future",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Faster delete, slower type

    if (!isDeleting && currentText.length < currentSentence.length) {
      // Typing
      const timeout = setTimeout(() => {
        setCurrentText(currentSentence.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentText.length === currentSentence.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Pause for 2 seconds
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText.length === 0) {
      // Move to next sentence
      setIsDeleting(false);
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    }
  }, [currentText, isDeleting, currentSentenceIndex, sentences]);

  // Animation Variants for Heading
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Imported Navbar */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16 md:px-12 lg:px-20 overflow-hidden">
        <div className="container mx-auto relative pt-20">
          {/* Background Effects */}
          <motion.div
            className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl -z-10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Header Section */}
          <motion.div
            className="flex flex-col items-center text-center space-y-8 "
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-extrabold font-sans bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
  <motion.span variants={textVariants} className="inline-flex">
    {"Hey, I’m  Manasvi".split("").map((char, index) => (
      <motion.span key={index} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.span>
</h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-sans font-semibold overflow-hidden whitespace-nowrap">
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                {currentText}
                <span className="inline-block w-1 h-6 bg-indigo-400 animate-blink" />
              </motion.span>
            </p>
            <p className="text-md md:text-lg text-gray-400 font-sans leading-relaxed max-w-2xl">
              I specialize in creating <span className="text-indigo-400 font-medium">modern, responsive</span> web experiences that blend functionality with stunning design. Let’s build something extraordinary together!
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-4">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            >
              <Buttons />
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </motion.div>

          {/* Extra Content: Tagline or Quote */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-gray-400 italic">
              "Turning ideas into digital realities, one pixel at a time."
            </p>
            <motion.span
              className="block mt-4 text-indigo-400 text-4xl md:text-5xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🚀
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Add this CSS in your global stylesheet or <style> tag */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </>
  );
};

export default Home;