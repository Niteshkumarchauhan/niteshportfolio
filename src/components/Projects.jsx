import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application with product catalog, shopping cart, and payment integration.',
      image: '🛍️',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '✓',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with geolocation, forecasts, and interactive maps.',
      image: '🌤️',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Beautiful and responsive portfolio website with smooth animations and modern design.',
      image: '💼',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A blogging platform with markdown support, commenting system, and user authentication.',
      image: '📝',
      technologies: ['React', 'GraphQL', 'Node.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-friendly fitness tracking app with workout logging and progress visualization.',
      image: '💪',
      technologies: ['React Native', 'Firebase', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

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
          {projects.filter((p) => p.featured).map((project) => (
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
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

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
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub /> Code
                  </motion.a>
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

      {/* All Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.filter((p) => !p.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="card-hover bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 flex flex-col"
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* View All Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.a
          href="https://github.com"
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
  )
}

export default Projects
