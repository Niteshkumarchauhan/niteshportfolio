import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaGit,
  FaFigma,
  FaWordpress,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiChakraui,
  SiMui,
  SiNodedotjs,
  SiAntdesign,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90, icon: <FaReact /> },
        { name: "JavaScript (ES6+)", level: 88, icon: <FaJsSquare /> },
        { name: "HTML5", level: 95, icon: <FaHtml5 /> },
        { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
        { name: "Bootstrap", level: 85, icon: <FaBootstrap /> },
        { name: "Chakra UI", level: 80, icon: <SiChakraui /> },
        { name: "Material UI", level: 82, icon: <SiMui /> },
        { name: "Ant Design", level: 78, icon: <SiAntdesign /> },
        { name: "WordPress", level: 80, icon: <FaWordpress /> },
        { name: "Responsive Design", level: 92, icon: "📱" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85, icon: <FaGit /> },
        { name: "Vite", level: 82, icon: <SiVite /> },
        { name: "Node.js", level: 72, icon: <SiNodedotjs /> },
        { name: "REST APIs", level: 85, icon: "🔌" },
        { name: "Figma", level: 70, icon: <FaFigma /> },
        { name: "NPM/Yarn", level: 85, icon: "📦" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 88, icon: "🧠" },
        { name: "Communication", level: 85, icon: "💬" },
        { name: "Team Collaboration", level: 90, icon: "🤝" },
        { name: "UI/UX Thinking", level: 78, icon: "🎨" },
        { name: "Time Management", level: 82, icon: "⏱️" },
        { name: "Documentation", level: 80, icon: "📚" },
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
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-container"
    >
      <h2 className="section-title">Skills & Expertise</h2>

      {skillCategories.map((category, categoryIndex) => (
        <motion.div key={category.category} className="mb-16">
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            {category.category}
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -5 }}
                className="card-hover bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl text-blue-400">
                    {typeof skill.icon === "string" ? skill.icon : skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h4>
                    <p className="text-blue-400 font-bold text-sm">
                      {skill.level}%
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-accent rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}

      {/* Additional Skills */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 bg-gradient-accent/10 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20"
      >
        <h3 className="text-2xl font-bold text-white mb-6">
          Core Competencies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-300 mb-3">Development</h4>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Single Page Applications (SPAs)</li>
              <li>✓ Component-Based Architecture</li>
              <li>✓ State Management (Redux, Context API)</li>
              <li>✓ Performance Optimization</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-300 mb-3">
              Quality & Best Practices
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Clean Code & SOLID Principles</li>
              <li>✓ Unit Testing & Integration Testing</li>
              <li>✓ Version Control & CI/CD</li>
              <li>✓ SEO & Web Accessibility</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
