// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";
import Container from "../layout/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/_ajyendra?igsh=ZTFvczZuMjZhNHkw", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <FaTiktok />, href: "#", label: "TikTok", color: "hover:text-purple-400" },
    { icon: <FaGithub />, href: "https://github.com/ajyendrasinghjadon", label: "Github", color: "hover:text-green-500" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/ajyendra-singh-jadon-10789138a?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn", color: "hover:text-blue-600" },
  ];

  const quickLinks = [
    { name: "Services", href: "services" },
    { name: "Process", href: "process" },
    { name: "Pricing", href: "pricing" },
    { name: "Contact", href: "contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, text: "ajyendrasinghjadonnn@gmail.com", href: "mailto:ajyendrasinghjadonnn@gmail.com" },
    { icon: <Phone size={18} />, text: "+91 98972-78469", href: "tel:+91 98972-78469" },
    { icon: <MapPin size={18} />, text: "Noida, Uttar Pradesh, India", href: "#" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <footer className="bg-white dark:bg-darkBg border-t border-gray-100 dark:border-gray-800 transition-colors duration-500 pt-24 pb-12 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">

          {/* Column 1: Branding & Description */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-start"
          >
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
              BluePeak <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Media</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-sm">
              Empowering the next generation of lifestyle creators to scale their brands with data-driven strategy and premium positioning.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 border border-gray-100 dark:border-gray-800 shadow-sm`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-primary">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group flex items-center justify-between w-full max-w-[200px] text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-secondary">
              Contact Us
            </h4>
            <ul className="space-y-6">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  <a
                    href={info.href}
                    className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-primary transition-transform group-hover:rotate-[10deg]">
                      {info.icon}
                    </span>
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Row */}
        <div className="pt-12 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} BluePeak Media. All rights reserved.
          </p>
          <p className="text-sm font-medium italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Built for creators worldwide.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 dark:text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;