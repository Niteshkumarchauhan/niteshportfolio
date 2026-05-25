import { motion } from "framer-motion";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import profileImg from "./assets/nitesh1.png";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section-container min-h-screen flex items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold">
              Welcome to my portfolio 👋
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Nitesh Kumar Chauhan</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 mb-4"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 mb-8 leading-relaxed"
          >
            I specialize in building interactive, responsive web applications
            with React, Tailwind CSS, and modern JavaScript. Passionate about
            creating exceptional user experiences and writing clean,
            maintainable code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              View My Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Get In Touch
            </motion.button>

            <motion.a
              href="/resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <HiDownload /> Resume
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-blue-500/20"
          >
            {[
              { number: "5+", label: "Projects" },
              { number: "1+", label: "Years Experience" },
              { number: "8+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Image/Illustration */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-full h-96"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-3xl blur-3xl"></div>

            {/* Main Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl border-2 border-blue-500/30"
            ></motion.div>

            {/* Profile Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-accent rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold">
                <img
                  src={profileImg}
                  alt="Nitesh Kumar Chauhan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
        <svg
          className="w-6 h-6 text-blue-400 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
