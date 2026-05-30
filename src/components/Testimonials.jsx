import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Kumar",
      title: "Project Manager, Mantra Labs",
      text: "Nitesh's attention to detail and problem-solving skills are exceptional. He delivered high-quality code and was always ready to go the extra mile.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Priya Sharma",
      title: "Designer, Tech Startup",
      text: "Working with Nitesh was a breeze. He understood our design requirements perfectly and implemented them flawlessly. Highly recommended!",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Rahul Singh",
      title: "CTO, Digital Agency",
      text: "Exceptional technical knowledge and communication skills. Nitesh transformed our project performance with his optimization expertise.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Neha Gupta",
      title: "Founder, Web Solutions",
      text: "Reliable, professional, and incredibly talented. Nitesh is the kind of developer you want on your team. Delivered everything on time!",
      rating: 5,
      image: "👩‍💼",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-container"
    >
      <h2 className="section-title">Client Testimonials</h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
        What clients say about working with me
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Card */}
            <div className="relative bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/50 transition-colors h-full flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaStar className="text-yellow-400 text-lg" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-blue-500/20 pt-4">
                <p className="text-xl font-bold text-white mb-1">
                  {testimonial.image} {testimonial.name}
                </p>
                <p className="text-xs text-blue-400">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-blue-500/20"
      >
        {[
          { number: "50+", label: "Happy Clients" },
          { number: "100+", label: "Projects Completed" },
          { number: "4.9★", label: "Average Rating" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-center group cursor-pointer"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform"
            >
              {stat.number}
            </motion.h3>
            <p className="text-gray-400 group-hover:text-white transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
