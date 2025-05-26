"use client";

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  className = "", 
  onClick, 
  type = "button",
  disabled = false,
  variant = "primary" 
}) => {
  // Determine base classes based on variant
  let baseClasses = "";
  
  switch(variant) {
    case "primary":
      baseClasses = "bg-amber-800 hover:bg-amber-900 text-white";
      break;
    case "secondary":
      baseClasses = "bg-white border border-amber-800 text-amber-800 hover:bg-amber-50";
      break;
    case "outline":
      baseClasses = "bg-transparent border border-amber-800 text-amber-800 hover:bg-amber-50";
      break;
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-semibold transition-colors ${baseClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton; 