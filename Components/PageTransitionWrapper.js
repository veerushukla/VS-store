// components/PageTransitionWrapper.js
'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const slideIn = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    x: '-50%',
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={slideIn}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-gradient-to-br  text-white"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
