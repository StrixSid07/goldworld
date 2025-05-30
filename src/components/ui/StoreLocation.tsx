"use client";

import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { getDirectionsUrl } from "@/utils/mapUtils";

interface StoreLocationProps {
  latitude?: number;
  longitude?: number;
}

const StoreLocation = ({ 
  latitude = 23.254638926638993, 
  longitude = 72.6568969776599 
}: StoreLocationProps) => {
  
  const handleGetDirections = () => {
    window.open(getDirectionsUrl(latitude, longitude), '_blank');
  };
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start">
        <FaMapMarkerAlt className="text-amber-600 text-2xl mt-1 mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-amber-900 mb-2">Visit Our Store</h3>
          <p className="text-gray-700 mb-4">
            Plot NO 602, GIDC, SECTOR-28<br />
            Gandhinagar, 382001
          </p>
          <div className="flex space-x-4">
            <motion.button
              onClick={handleGetDirections}
              className="flex items-center text-amber-800 hover:text-amber-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDirections className="mr-2" /> Get Directions
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="text-amber-800 hover:text-amber-600"
              >
                View on Map
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoreLocation; 