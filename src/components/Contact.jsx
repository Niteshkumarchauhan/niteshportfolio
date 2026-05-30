import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "837a8c7f-1d72-4dfd-8d5e-d9bddc5279ae",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again or contact directly.");
      console.error("Email error:", err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "niteshkumarc801@gmail.com",
      href: "mailto:niteshkumarc801@gmail.com",
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
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 flex items-center gap-2"
              >
                <FaExclamationCircle /> {error}
              </motion.div>
            )}

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
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:bg-slate-800 transition-colors ${
                  errors.name
                    ? "border-red-500 focus:border-red-400"
                    : "border-blue-500/30 focus:border-blue-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationCircle className="text-xs" /> {errors.name}
                </p>
              )}
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
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:bg-slate-800 transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-400"
                    : "border-blue-500/30 focus:border-blue-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationCircle className="text-xs" /> {errors.email}
                </p>
              )}
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
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:bg-slate-800 transition-colors ${
                  errors.subject
                    ? "border-red-500 focus:border-red-400"
                    : "border-blue-500/30 focus:border-blue-400"
                }`}
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationCircle className="text-xs" /> {errors.subject}
                </p>
              )}
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
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:bg-slate-800 transition-colors resize-none ${
                  errors.message
                    ? "border-red-500 focus:border-red-400"
                    : "border-blue-500/30 focus:border-blue-400"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationCircle className="text-xs" /> {errors.message}
                </p>
              )}
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
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                className={`w-full py-4 font-semibold rounded-lg transition-all ${
                  loading
                    ? "bg-blue-500/50 text-blue-200 cursor-not-allowed"
                    : "btn-primary"
                }`}
              >
                {loading
                  ? "Sending..."
                  : submitted
                    ? "Message Sent! 🎉"
                    : "Send Message"}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center flex items-center justify-center gap-2"
              >
                <FaCheckCircle /> Thank you! I'll get back to you soon.
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
