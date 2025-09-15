'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'zoom' | 'flip';
  delay?: number;
  duration?: number;
}

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  animation = 'fade',
  delay = 0,
  duration = 0.5 
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const variants = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    slide: {
      hidden: { x: -100, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    zoom: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 }
    },
    flip: {
      hidden: { rotateX: 90, opacity: 0 },
      visible: { rotateX: 0, opacity: 1 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants[animation]}
      initial="hidden"
      animate={controls}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};