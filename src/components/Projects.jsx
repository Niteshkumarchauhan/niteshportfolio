import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mantra Labs Website",
      description:
        "A professional corporate website for Mantra Labs Global, showcasing their services, expertise, and innovative solutions. Built with modern web technologies to deliver a seamless user experience and responsive design across all devices.",
      image: "🌐",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
      github: null,
      live: "https://www.mantralabsglobal.com/",
      featured: true,
    },
    {
      id: 2,
      title: "Pro-Dash",
      description:
        "A sleek and powerful admin dashboard built with React and Tailwind CSS. Features interactive charts, data tables, dark/light mode toggle, and a fully responsive layout — perfect for managing business metrics at a glance.",
      image: "📊",
      technologies: ["React", "Tailwind CSS", "Recharts", "React Router"],
      github: "https://github.com/Niteshkumarchauhan/Pro-Dashboard",
      live: "https://pro-dashboard-ruby.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Smart Todo List",
      description:
        "A clean and intuitive task management app that helps you stay organized. Supports adding, editing, deleting, and marking tasks as complete — with a minimal UI and smooth animations for a satisfying user experience.",
      image: "✅",
      technologies: ["React", "Tailwind CSS", "LocalStorage", "Framer Motion"],
      github: "https://github.com/Niteshkumarchauhan/smartTodoList",
      live: "https://smart-todo-list-five.vercel.app/",
      featured: true,
    },
    {
      id: 4,
      title: "Movie Search App",
      description:
        "A fast and responsive movie discovery app powered by the OMDB API. Search any movie by title and instantly get details like ratings, genre, cast, and plot — all wrapped in a modern card-based UI.",
      image: "🎬",
      technologies: ["React", "OMDB API", "Tailwind CSS", "Axios"],
      github: "https://github.com/Niteshkumarchauhan/movie-Search-App",
      live: "https://weather-app-pink-two-15.vercel.app/",
      featured: true,
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "A clean weather dashboard that lets users check current conditions and forecasts with a simple, modern interface. It provides real-time weather details, location-based search, and a smooth responsive experience.",
      image: "🌤️",
      technologies: ["React", "OpenWeather API", "Tailwind CSS", "Axios"],
      github: "https://github.com/Niteshkumarchauhan/weather-app",
      live: "https://weather-app-example.vercel.app/",
      featured: true,
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
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-container"
    >
      <h2 className="section-title">Featured Projects</h2>

      {/* Featured Projects */}
      <div className="mb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="card-hover group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-accent/20 flex items-center justify-center overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View All Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.a
          href="https://github.com/Niteshkumarchauhan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="btn-primary inline-flex items-center gap-2"
        >
          View All Projects on GitHub
          <FaExternalLinkAlt />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
