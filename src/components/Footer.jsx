import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-20 bg-gradient-to-t from-slate-950 to-slate-900 border-t border-blue-500/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Footer */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              Nitesh Kumar Chauhan
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful,
              interactive web experiences with modern technologies and best
              practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <SocialLinks />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nitesh Kumar Chauhan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
