"use client";

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface AnimateInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate';
  once?: boolean;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  threshold = 0.1,
  animation = 'fade',
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold // 'amount' is the correct property name in framer-motion
  });
  
  let initial = {};
  let animate = {};
  
  // Set animation variants based on type
  switch (animation) {
    case 'fade':
      initial = { opacity: 0 };
      animate = { opacity: 1 };
      break;
    case 'slide':
      initial = { opacity: 0, y: 50 };
      animate = { opacity: 1, y: 0 };
      break;
    case 'scale':
      initial = { opacity: 0, scale: 0.8 };
      animate = { opacity: 1, scale: 1 };
      break;
    case 'rotate':
      initial = { opacity: 0, rotate: -5 };
      animate = { opacity: 1, rotate: 0 };
      break;
    default:
      initial = { opacity: 0 };
      animate = { opacity: 1 };
  }
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView; 