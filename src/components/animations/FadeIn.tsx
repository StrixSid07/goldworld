"use client";

import { motion } from 'framer-motion';
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

type AnimationProps = {
  opacity: number;
  x?: number;
  y?: number;
};

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  direction = 'up',
  distance = 20
}) => {
  let initial: AnimationProps = { opacity: 0 };
  
  // Add direction-based initial position
  switch (direction) {
    case 'up':
      initial = { ...initial, y: distance };
      break;
    case 'down':
      initial = { ...initial, y: -distance };
      break;
    case 'left':
      initial = { ...initial, x: distance };
      break;
    case 'right':
      initial = { ...initial, x: -distance };
      break;
    default:
      break;
  }
  
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
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

export default FadeIn; 