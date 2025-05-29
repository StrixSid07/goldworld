"use client";

import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  image: string;
  weight: string;
  purity: string;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  discountPrice,
  image,
  weight,
  purity,
}: ProductCardProps) => {
  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Calculate discount percentage
  const discountPercentage = Math.round(((price - discountPrice) / price) * 100);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 sm:h-64 bg-gray-200">
        {/* Display the product image */}
        <motion.div 
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority={id === "gc001" || id === "j001" || id === "gb001"}
          />
        </motion.div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-amber-900 mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-600 mr-2">{weight}</span>
          <span className="text-sm text-gray-600">{purity}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{description}</p>

        <div className="flex items-center justify-between mb-3">
          <div>
            <motion.span 
              className="text-lg font-bold text-amber-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {formatPrice(discountPrice)}
            </motion.span>
            {discountPercentage > 0 && (
              <>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {formatPrice(price)}
                </span>
                <motion.span 
                  className="ml-2 text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.2 }}
                >
                  {discountPercentage}% OFF
                </motion.span>
              </>
            )}
          </div>
        </div>

        <div className="flex space-x-2 mt-auto">
          <motion.div className="flex-1" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={`/products/${id}`}
              className="block w-full py-2 px-4 bg-amber-100 hover:bg-amber-200 text-amber-900 text-center rounded-md transition-colors font-medium"
            >
              View Details
            </Link>
          </motion.div>
          <motion.button
            className="p-2 bg-amber-800 hover:bg-amber-900 text-white rounded-md transition-colors"
            aria-label="Add to cart"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShoppingCart />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 