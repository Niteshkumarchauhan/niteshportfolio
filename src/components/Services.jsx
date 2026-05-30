import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaRocket,
  FaHeadset,
  FaBug,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      features: [
        "React Apps",
        "Responsive Design",
        "Performance Optimization",
        "Cross-browser Testing",
      ],
    },

    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      description:
        "Optimize your application for speed, efficiency, and scalability.",
      features: [
        "Bundle Size Reduction",
        "Lazy Loading",
        "Code Splitting",
        "SEO Optimization",
      ],
    },
    {
      icon: <FaHeadset />,
      title: "Technical Consulting",
      description:
        "Expert advice on architecture, technology selection, and best practices.",
      features: [
        "Tech Stack Recommendation",
        "Code Review",
        "Architecture Design",
        "Team Mentoring",
      ],
    },
    {
      icon: <FaBug />,
      title: "Bug Fixing & Maintenance",
      description:
        "Keep your applications running smoothly with regular maintenance and support.",
      features: [
        "Bug Fixes",
        "Updates",
        "Security Patches",
        "Performance Monitoring",
      ],
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Reporting",
      description:
        "Insights into user behavior and application performance metrics.",
      features: [
        "Analytics Setup",
        "Performance Reports",
        "Conversion Tracking",
        "A/B Testing",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-container"
    >
      <h2 className="section-title">Services I Offer</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

            <div className="relative card-hover bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-5xl text-blue-400 mb-6 inline-block group-hover:text-gradient transition-colors"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-300 text-sm group-hover:text-blue-300 transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 rounded-full bg-blue-400"
                    ></motion.span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* Learn More Link */}
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 group"
            >
              Learn More
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 bg-gradient-accent/10 backdrop-blur-sm p-12 rounded-xl border border-blue-500/20 text-center"
      >
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Work Together?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Let's discuss how I can help bring your ideas to life.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-primary"
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Services;
