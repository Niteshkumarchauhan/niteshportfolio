import { motion } from "framer-motion";

const About = () => {
  const experiences = [
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      company: "Mantra Labs",
      details: [
        "Developed responsive and user-friendly web applications using React.js and modern CSS frameworks.",
        "Built reusable UI components to improve application scalability and maintainability.",
        "Collaborated with designers and backend developers to deliver seamless user experiences.",
        "Optimized website performance, responsiveness, and cross-browser compatibility.",
        "Worked with REST APIs and implemented dynamic, interactive frontend features.",
        "Maintained clean, efficient, and scalable code following industry best practices.",
      ],
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-container"
    >
      <h2 className="section-title">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* About Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate frontend developer with a keen eye for design and a
            love for solving complex problems. With over 3 years of experience
            in web development, I've had the opportunity to work with
            cutting-edge technologies and collaborate with talented teams.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My journey in development began with a curiosity about how websites
            work, which evolved into a full-fledged career. I specialize in
            React.js, creating interactive user interfaces, and optimizing
            application performance. I'm always eager to learn new technologies
            and best practices.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new design trends,
            contributing to open-source projects, or writing technical blogs
            about web development.
          </p>

          {/* Interests */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Interests & Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {["React.js", "Performance", "JavaScript", "CSS Animations"].map(
                (item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold"
                  >
                    {item}
                  </motion.span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="relative pl-8 pb-8 border-l-2 border-blue-500/30 hover:border-blue-400 transition-colors"
              >
                <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-blue-400 border-2 border-slate-900"></div>

                <p className="text-blue-400 font-semibold text-sm">
                  {exp.year}
                </p>

                <h4 className="text-xl font-bold text-white mt-1">
                  {exp.title}
                </h4>

                <p className="text-gray-400 mb-2">{exp.company}</p>

                <ul className="mt-3 space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-blue-400">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Key Achievements */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
      >
        {[
          {
            title: "Projects Delivered",
            description:
              "Successfully completed 50+ projects for diverse clients.",
            icon: "🚀",
          },
          {
            title: "Performance Focus",
            description:
              "Consistently optimize apps for speed and user experience.",
            icon: "⚡",
          },
          {
            title: "Best Practices",
            description:
              "Follow SOLID principles and clean code methodologies.",
            icon: "✨",
          },
        ].map((achievement) => (
          <motion.div
            key={achievement.title}
            whileHover={{ y: -10 }}
            className="card-hover bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
          >
            <p className="text-4xl mb-3">{achievement.icon}</p>
            <h4 className="text-lg font-bold text-white mb-2">
              {achievement.title}
            </h4>
            <p className="text-gray-400 text-sm">{achievement.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
