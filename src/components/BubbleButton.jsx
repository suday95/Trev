'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BubbleButton({children}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.95 }} // 👈 scale down on click
      className="relative px-6 py-3 border-2 border-red-600 font-bold rounded-md overflow-hidden text-red-600"
    >
      {/* Bubble background */}
      <motion.div
        className="absolute w-full h-full bg-red-600 z-0"
        initial={{ scale: 0, borderRadius: "50%" }}
        animate={{
          scale: hovered ? 3 : 0,
          transition: { duration: 0.4 },
        }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Text with changing color */}
      <span className={`relative z-10 transition-colors duration-300 ${hovered ? "text-white" : "text-red-600"}`}>
        <motion.span
  className="relative z-10"
  animate={{ color: hovered ? "#ffffff" : "#ce0000" }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.span>
        
      </span>
    </motion.button>
  );
}
