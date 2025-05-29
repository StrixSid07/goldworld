"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-amber-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-4">
              <div className="relative h-24 w-24 mr-2 overflow-hidden flex items-center justify-center">
                <Image 
                  src="/images/SiteLogo.png" 
                  alt="GoldWorld Logo"
                  width={144}
                  height={144}
                  className="object-contain rounded-md"
                />
              </div>
            </div>
            <p className="mb-4">Your trusted partner for premium gold jewelry, coins, and bars.</p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-200"
                whileHover={{ y: -3, color: "#FDE68A" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-200"
                whileHover={{ y: -3, color: "#FDE68A" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-200"
                whileHover={{ y: -3, color: "#FDE68A" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href={link.path} className="hover:text-amber-200 transition-colors">
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: "Terms & Conditions", path: "/policy/terms" },
                { name: "Privacy Policy", path: "/policy/privacy" },
                { name: "Refund Policy", path: "/policy/refund" },
                { name: "Shipping Policy", path: "/policy/shipping" }
              ].map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href={link.path} className="hover:text-amber-200 transition-colors">
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Contact Us</h3>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start space-x-3"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <FaMapMarkerAlt className="mt-1 text-amber-200" />
                <span>Plot NO 602, GIDC, SECTOR-28, Gandhinagar, 382001</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone className="text-amber-200" />
                <span>+91 9825 052599</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-amber-200" />
                <span>info@goldworld.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-amber-800 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {currentYear} GoldWorld. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 