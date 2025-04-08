import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  RiCloseLine,
  RiAlignJustify,
  RiHome3Fill,
  RiUser3Line,
  RiContactsLine,
  RiComputerLine,
  RiFileList3Line,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

// Nav Items
const navItems = [
  { to: "/", icon: <RiHome3Fill className="mt-1" />, label: "Home" },
  { to: "/About", icon: <RiUser3Line className="mt-1" />, label: "About" },
  { to: "/Projects", icon: <RiComputerLine className="mt-1" />, label: "Projects" },
  { to: "/Resume", icon: <RiFileList3Line className="mt-1" />, label: "Resume" },
  { to: "/contacts", icon: <RiContactsLine className="mt-1" />, label: "Contacts" },
];

// Reusable NavItem with active route
const NavItem = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="group w-full md:w-auto">
      <Link
        to={to}
        className={`flex items-center gap-2 px-4 py-2 text-base font-sans font-medium w-full ${
          isActive ? "text-indigo-400" : "text-gray-200"
        } hover:text-indigo-400 transition-all duration-300 ease-in-out hover:scale-105`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Close menu on navigation or resize to desktop
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg border-b border-gray-700">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-sans font-bold text-indigo-400 tracking-wide hover:text-indigo-300 transition-colors duration-200"
        >
          Manasvi
        </Link>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-white focus:outline-none hover:text-indigo-400 transition-colors duration-200"
          onClick={() => setShowMenu(!showMenu)}
          aria-label={showMenu ? "Close menu" : "Open menu"}
          aria-expanded={showMenu}
        >
          {showMenu ? (
            <RiCloseLine size={28} className="transition-transform duration-300 hover:rotate-90" />
          ) : (
            <RiAlignJustify size={28} className="transition-transform duration-300 hover:scale-110" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:flex-row md:items-center md:gap-8">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>

        {/* Mobile Menu */}
        <motion.ul
          className={`${
            showMenu ? "flex" : "hidden"
          } md:hidden flex-col items-start w-full fixed top-[64px] left-0 right-0 bg-gray-800 p-4`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -10 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;