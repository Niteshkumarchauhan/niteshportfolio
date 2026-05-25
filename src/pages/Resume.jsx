import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const Resume = () => {
  const experiences = [
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      company: "Mantra Labs.",
      details: [
        "Developed and maintained 8+ responsive and customer-focused web applications using React.js, JavaScript, and modern frontend technologies.",

        "Collaborated closely with UI/UX designers, backend developers, and project managers to deliver seamless, scalable, and high-quality digital experiences.",

        "Built reusable UI components and implemented responsive layouts to ensure smooth performance across desktop, tablet, and mobile devices.",

        "Integrated REST APIs and dynamic frontend functionalities to create interactive and user-friendly web applications.",

        "Enhanced application performance by optimizing bundle size, reducing load times, and improving overall responsiveness and accessibility.",

        "Implemented modern animations, clean UI designs, and cross-browser compatibility to improve user engagement and experience.",

        "Maintained clean, reusable, and scalable code following industry best practices and frontend development standards.",

        "Actively participated in debugging, testing, feature enhancements, and continuous improvement of existing web applications.",
      ],
    },
  ];

  const education = [
    {
      year: "2021",
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      institution: "AKTU Lucknow",
    },
    {
      year: "2015",
      degree: "Higher Secondary Education (12th Grade)",
      field: "Physics, Chemistry & Mathematics (PCM)",
      institution: "SBS Inter College, Varanasi, Uttar Pradesh",
    },
    {
      year: "2012",
      degree: "Secondary School Education (10th Grade)",
      field: "Science",
      institution: "SDS Inter College, Varanasi, Uttar Pradesh",
    },
  ];

  const skills = {
    "Frontend Technologies": [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "Chakra UI",
      "Ant Design",
    ],
    "State Management": ["Redux", "Context API"],
    "Tools & Build": ["Vite", "Git", "GitHub", "npm"],
    "Testing & QA": ["React Testing Library"],
    "Additional Skills": [
      "REST APIs",
      "GraphQL",
      "Web Performance",
      "Responsive Design",
      "SEO",
    ],
  };

  const certifications = [
    "React Professional Developer Certification",
    "Advanced JavaScript Fundamentals",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 pb-20"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Nitesh Kumar Chauhan
              </h1>
              <p className="text-xl text-blue-400 font-semibold">
                Frontend Developer
              </p>
              <p className="text-gray-400 mt-2">
                Building beautiful, responsive web experiences
              </p>
            </div>
            <motion.a
              href="/Nitesh_01.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 w-fit cursor-pointer"
            >
              <HiDownload />
              Download Resume
            </motion.a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-gray-300">
            <div>📧 niteshkumarc801@gmail.com</div>
            <div>📞 +91 7905583081</div>
            <div>📍 India</div>
            <div>🔗 github.com/Niteshkumarchauhan</div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Front-End Developer with 1.5+ years of professional experience
            building responsive and high-quality websites using WordPress. Took
            ownership of a critical project by stepping in as lead and ensured
            100% on-time delivery while maintaining strong quality standards.
            Focused on creating clean, user-friendly, and performance-driven
            websites that provide a smooth experience across all devices.
            Passionate about delivering simple and effective web solutions.
            <span className="block text-3xl font-bold text-white mt-6 mb-4">
              Objective:
            </span>
            Seeking a challenging front-end development role in a dynamic
            organization where I can apply my technical expertise, contribute to
            impactful projects, and continue enhancing my skills in modern web
            technologies.
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {exp.year}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 flex items-start gap-3"
                    >
                      <span className="text-blue-400 mt-1">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
              >
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400">{edu.field}</p>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
              >
                <h3 className="text-lg font-bold text-blue-300 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20"
              >
                <span className="text-2xl">🏆</span>
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Resume;
