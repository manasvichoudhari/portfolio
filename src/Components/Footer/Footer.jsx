import React from "react";
import '@fontsource/open-sans';
import '@fontsource/roboto';
import '@fontsource/pacifico';
import '@fontsource/montserrat';
import { RiGithubLine, RiLinkedinBoxLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";

const socialLinks = [
  {
    href: "https://github.com/manasvichoudhari",
    icon: <RiGithubLine size={28} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/manasvi-choudhari",
    icon: <RiLinkedinBoxLine size={28} />,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/+919131341101",
    icon: <RiWhatsappLine size={28} />,
    label: "WhatsApp",
  },
  {
    href: "mailto:manasvichoudhari1910@gmail.com",
    icon: <RiMailLine size={28} />,
    label: "Email",
  },
];

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
    aria-label={label}
  >
    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {icon}
    </span>
    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-poppins py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </span>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-12 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center space-y-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold font-montserrat tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Let’s Connect
          </h2>
          <p className="text-base text-gray-300 font-open-sans max-w-md mx-auto leading-relaxed">
            I’m excited to explore new opportunities, collaborate on innovative projects, or simply chat about tech. Reach out!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} {...link} />
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 font-roboto opacity-90">
            © {new Date().getFullYear()} Manasvi Choudhari. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="mt-8 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent" />
    </footer>
  );
};

export default Footer;