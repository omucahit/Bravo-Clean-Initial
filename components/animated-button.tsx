"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface AnimatedButtonProps {
  className?: string;
}

export function AnimatedButton({ className }: AnimatedButtonProps) {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Get a Free Quote!", "Book Now"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Button
      size="lg"
      className={`relative overflow-hidden w-[180px] h-[44px] ${className}`}
      onClick={() => setTextIndex((current) => (current + 1) % texts.length)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[textIndex]}
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: { 
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          }}
          exit={{ y: 20, opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center w-full"
        >
          {texts[textIndex]}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
