"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    topic: "",
    email: "",
    name: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form or show success message
  };

  return (
    <main className="min-h-screen bg-black text-white pt-20 px-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-16 md:py-24 md:mt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="/ngnhero.jpg" 
            alt="Modern Building" 
            fill
            className="object-cover opacity-50"
          />
        </div>
        
        <div className="container mx-auto z-10 h-[400px]">
          <motion.div 
            className="max-w-xl bg-black p-8 md:p-12 absolute left-0 bottom-0 md:bottom-0 lg:bottom-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-[#EBD67B] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              CONTACT US
            </motion.h1>
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-[#EBD67B] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Customer Service and Support
            </motion.h1>
            <motion.p 
              className="text-[#EBD67B]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Contact us for answers to all of your banking questions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            You can reach us by:
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Contact */}
            <motion.div 
              className="border border-[#333] p-6 rounded-lg text-center hover:border-[#EBD67B] transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(235, 214, 123, 0.1)" }}
            >
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/Vector.svg" 
                    alt="Email" 
                    width={24} 
                    height={24}
                  />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#EBD67B]">Email</h3>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">United Kingdom</p>
                <p className="text-sm text-[#EBD67B]">support@nattybank.com</p>
              </div>
            </motion.div>
            
            {/* Add similar motion.div wrappers for other contact methods */}
            
          </div>
        </div>
      </section>

      {/* Rest of your contact page content with animations */}
      
    </main>
  );
}