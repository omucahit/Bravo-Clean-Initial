"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const titles = {
    default: {
      heading: "Contact Us",
      subheading: "Have questions about our cleaning services? We're here to help. Reach out to us through any of the following methods."
    },
    submitted: {
      heading: "Thank You for Reaching Out!",
      subheading: "We'll be in touch within 24 hours to discuss your cleaning needs and answer any questions you may have."
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <div className="h-[120px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={isSubmitted ? "submitted" : "default"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                  {isSubmitted ? titles.submitted.heading : titles.default.heading}
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {isSubmitted ? titles.submitted.subheading : titles.default.subheading}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-8">Send us a Message</h2>
            <ContactForm onSubmitSuccess={() => setIsSubmitted(true)} />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}
