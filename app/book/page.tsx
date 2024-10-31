"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BookPage() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = ["Book Your Cleaning Service!", "Get A Free Quote!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <div className="h-[40px] mb-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titles[textIndex]}
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
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              >
                {titles[textIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Schedule your cleaning service at a time that works best for you.
          </p>
        </div>
        
        <div className="w-full !p-0 !m-0" style={{ height: "4000px" }}>
          <iframe 
            sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation"
            height={4000}
            src="https://app.zenmaid.com/booking-forms/62D4W/book"
            style={{ width: "100%" }}
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </main>
  );
}
