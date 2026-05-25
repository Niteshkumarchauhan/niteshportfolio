import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Niteshkumarchauhan",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/nitesh-kumar-chauhan/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },

    {
      icon: <FaEnvelope />,
      url: "mailto:niteshkumarc801@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: <FaPhone />,
      url: "tel:+917905583081",
      label: "Phone",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          className={`text-xl text-gray-400 ${social.color} transition-colors duration-300`}
          title={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
