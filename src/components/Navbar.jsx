import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "./assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // Agar resume page par ho
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gradient-primary backdrop-blur-md border-b border-blue-500/20 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            <img
              src={logo}
              alt="Profile"
              className="w-32 h-16 object-cover rounded-full"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.path ? (
              <Link key={item.label} to={item.path}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </motion.button>
              </Link>
            ) : (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </motion.button>
            ),
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-blue-400"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="md:hidden overflow-hidden bg-slate-900/50 backdrop-blur-md"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) =>
            item.path ? (
              <Link key={item.label} to={item.path}>
                <motion.button
                  whileHover={{ x: 10 }}
                  className="text-left text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </motion.button>
              </Link>
            ) : (
              <motion.button
                key={item.label}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </motion.button>
            ),
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
