import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "niteshkumarc@gmail.com",
      href: "mailto:niteshkumarc@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 7905583081",
      href: "tel:+917905583081",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-container"
    >
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 group"
              >
                <div className="text-2xl text-blue-400 mt-1 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold">
                    {info.label}
                  </p>
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg"
          >
            <p className="text-sm text-gray-300 mb-2">
              <span className="w-2 h-2 inline-block rounded-full bg-green-400 mr-2"></span>
              Available for projects
            </p>
            <p className="text-white font-semibold">
              Response time: Within 24 hours
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-white font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-slate-800 transition-colors"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-slate-800 transition-colors"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-white font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-slate-800 transition-colors"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-slate-800 transition-colors resize-none"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary py-4"
              >
                {submitted ? "Message Sent! 🎉" : "Send Message"}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
              >
                Thank you! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      {/* Social Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-20 pt-12 border-t border-blue-500/20 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-6">
          Also Follow Me On
        </h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { name: "GitHub", url: "https://github.com" },
            { name: "LinkedIn", url: "https://linkedin.com" },
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors"
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
