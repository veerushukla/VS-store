// components/HeroSection.js
'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">Frontend Developer & Designer</p>
      </motion.div>
    </section>
  );
}
