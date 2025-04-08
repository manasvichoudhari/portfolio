import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import loura from "../../assets/loura.png";
import calc from "../../assets/calculator.png";
import ama from "../../assets/amazon.png";
import net from "../../assets/netflix2.png";

// Project data
const projects = [
  {
    title: "Netflix Clone",
    description:
      "Developed a Netflix-inspired streaming platform with user authentication via Firebase, dynamic content rendering, and a custom video player for an immersive experience.",
    technologies: ["HTML", "CSS"],
    image: net,
    demoLink: "https://fascinating-muffin-7513dc.netlify.app/",
    githubLink: "https://github.com/manasvichoudhari/netflixmanasvi",
  },
  {
    title: "Amazon Clone",
    description:
      "Built an e-commerce platform inspired by Amazon, featuring dynamic product displays, real-time search, and a mobile-first responsive design for seamless shopping.",
    technologies: ["HTML", "CSS"],
    image: ama,
    demoLink: "https://demo.com",
    githubLink: "https://github.com/manasvichoudhari/amazonclone",
  },
  {
    title: "Loura Portfolio",
    description:
      "Designed a personal portfolio showcasing my web development skills, featuring Tailwind CSS, responsive layouts, and modern design principles.",
    technologies: ["HTML", "Tailwind CSS"],
    image: loura,
    demoLink: "https://manulora-clone.netlify.app/",
    githubLink: "https://github.com/manasvichoudhari/Loura-clone",
  },
  {
    title: "Calculator",
    description:
      "Created a functional calculator app with a clean interface, demonstrating proficiency in interactive front-end development using JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: calc,
    demoLink: "https://manu-calculator.netlify.app/",
    githubLink: "https://github.com/manasvichoudhari/calculator",
  },
];

// Project Card Component
const ProjectCard = ({ title, description, technologies, image, demoLink, githubLink }) => (
  <div
    className="group relative max-w-[400px] w-full mx-auto rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
    data-aos="fade-up"
  >
    <img
      src={image}
      alt={`${title} screenshot`}
      className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
    <div className="p-6 space-y-4">
      <h3 className="text-2xl font-semibold text-white font-sans">{title}</h3>
      <p className="text-gray-300 font-sans text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="bg-indigo-600 text-white text-xs font-sans font-medium rounded-full px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center pt-2">
        <a
          href={githubLink}
          className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
        >
          <FaGithub size={20} />
        </a>
        <a
          href={demoLink}
          className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${title}`}
        >
          <FaExternalLinkAlt size={20} />
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-700 text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300 font-sans max-w-2xl mx-auto">
            A showcase of my work in web development, blending creativity and technical expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid justify-center sm:justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
