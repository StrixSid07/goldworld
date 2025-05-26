import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">GoldWorld</h3>
            <p className="mb-4">Your trusted partner for premium gold jewelry, coins, and bars.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-200 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-200 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/policy/terms" className="hover:text-amber-200 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/policy/privacy" className="hover:text-amber-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policy/refund" className="hover:text-amber-200 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/policy/shipping" className="hover:text-amber-200 transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-amber-200" />
                <span>123 Gold Street, Mumbai, Maharashtra, India - 400001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-amber-200" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-200" />
                <span>info@goldworld.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} GoldWorld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 